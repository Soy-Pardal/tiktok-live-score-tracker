const express = require('express');
const { WebcastPushConnection } = require('tiktok-live-connector');
const WebSocket = require('ws');
const fs = require('fs'); 

const app = express();
const PORT = 3000;

// Configuração para armazenar usuários e ranking no servidor
let users = [];
let rank = [];



// Função para ler o nome da live do arquivo
function getLiveNameFromFile() {
    const filePath = './live-name.txt'; // Caminho do arquivo
    try {
        if (fs.existsSync(filePath)) {
            const liveName = fs.readFileSync(filePath, 'utf8').trim(); // Lê e remove espaços extras
            console.log(`Live carregada: "${liveName}"`);
            return liveName;
        } else {
            console.warn(`Arquivo ${filePath} não encontrado. Usando nome padrão.`);
            return 'defaultLiveName'; // Nome padrão caso o arquivo não exista
        }
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
        return 'defaultLiveName'; // Nome padrão em caso de erro
    }
}


// Servir arquivos estáticos
app.use(express.static(__dirname + '/public'));

// Iniciar o servidor
const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Configuração do WebSocket
const wss = new WebSocket.Server({ server });

// Conexão TikTok Live
const tiktokUsername = getLiveNameFromFile(); // Nome da live vem do arquivo
const tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

// Conectar ao TikTok Live
tiktokLiveConnection.connect()
    .then(state => {
        console.info(`Conectado ao TikTok Live na roomId ${state.roomId}`);
    })
    .catch(err => {
        console.error('Falha ao conectar:', err);
    });

// Evento: Mensagens no chat do TikTok
tiktokLiveConnection.on('chat', data => {
    console.log(`${data.uniqueId}`);

    // Adicionar ou atualizar usuário
    let user = users.find(u => u.name === data.uniqueId);
    if (!user) {
        user = { name: data.uniqueId, photo: data.profilePictureUrl };
        users.push(user);
    }

    // Transmitir a mensagem para todos os clientes conectados via WebSocket
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
                type: 'chatMessage',
                picture: data.profilePictureUrl,
                username: data.uniqueId,
                comment: data.comment
            }));
        }
    });

    // Transmitir atualização dos usuários para todos os clientes conectados
    broadcast({ type: 'updateUsers', users });
});

// Evento para gerenciar mensagens dos clientes WebSocket
wss.on('connection', ws => {
    console.log('Cliente conectado ao WebSocket.');

    // Envia os dados iniciais (usuários e ranking) para o cliente
    ws.send(JSON.stringify({ type: 'initialData', users, rank }));

    ws.on('message', message => {
        const data = JSON.parse(message);

        if (data.type === 'updatePoints') {
            const rankUser = rank.find(u => u.name === data.username);
            if (rankUser) {
                rankUser.points = Math.max(0, rankUser.points + data.points);
                broadcast({ type: 'updateRank', rank });
            }
        }

        if (data.type === 'addToRank') {
            const user = users.find(u => u.name === data.username);
            if (user && !rank.find(u => u.name === data.username)) {
                rank.push({ ...user, points: 0 });
                broadcast({ type: 'updateRank', rank });
            }
        }

        if (data.type === 'removeFromRank') {
            const index = rank.findIndex(u => u.name === data.username);
            if (index !== -1) {
                rank.splice(index, 1);
                broadcast({ type: 'updateRank', rank });
            }
        }
    });

    ws.on('close', () => {
        console.log('Cliente desconectado do WebSocket.');
    });
});

function broadcast(data) {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
}
