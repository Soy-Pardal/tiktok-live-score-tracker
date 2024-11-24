const users = [
    { name: "Alice", photo: "https://th.bing.com/th/id/R.3f3b68c0fde58eea7448cef9b640e299?rik=c0t2b8nVH4v%2f2g&pid=ImgRaw&r=0" },
    { name: "Bob", photo: "https://media.licdn.com/dms/image/C4E03AQGLnyRmZC2Bqg/profile-displayphoto-shrink_800_800/0/1639917335217?e=2147483647&v=beta&t=FSAEu3CsIouOPYF8SSMdPOmhkxk2YL9Evanqa8RWp8w" },
    { name: "Charlie", photo: "https://media.licdn.com/dms/image/D4E03AQHzzxWRG32rSg/profile-displayphoto-shrink_800_800/0/1694695270643?e=2147483647&v=beta&t=hye4Kd4NQPipsKPb2O0irsoyM6n9BE6t0Qn-jajPQeA" },
    { name: "Alice 1", photo: "https://th.bing.com/th/id/R.3f3b68c0fde58eea7448cef9b640e299?rik=c0t2b8nVH4v%2f2g&pid=ImgRaw&r=0" },
    { name: "Bobawdaw", photo: "https://media.licdn.com/dms/image/C4E03AQGLnyRmZC2Bqg/profile-displayphoto-shrink_800_800/0/1639917335217?e=2147483647&v=beta&t=FSAEu3CsIouOPYF8SSMdPOmhkxk2YL9Evanqa8RWp8w" },
    { name: "Charlievva", photo: "https://media.licdn.com/dms/image/D4E03AQHzzxWRG32rSg/profile-displayphoto-shrink_800_800/0/1694695270643?e=2147483647&v=beta&t=hye4Kd4NQPipsKPb2O0irsoyM6n9BE6t0Qn-jajPQeA" },
    { name: "Alice 2", photo: "https://th.bing.com/th/id/R.3f3b68c0fde58eea7448cef9b640e299?rik=c0t2b8nVH4v%2f2g&pid=ImgRaw&r=0" },
    { name: "Bob2", photo: "https://media.licdn.com/dms/image/C4E03AQGLnyRmZC2Bqg/profile-displayphoto-shrink_800_800/0/1639917335217?e=2147483647&v=beta&t=FSAEu3CsIouOPYF8SSMdPOmhkxk2YL9Evanqa8RWp8w" },
    { name: "Charliefse", photo: "https://media.licdn.com/dms/image/D4E03AQHzzxWRG32rSg/profile-displayphoto-shrink_800_800/0/1694695270643?e=2147483647&v=beta&t=hye4Kd4NQPipsKPb2O0irsoyM6n9BE6t0Qn-jajPQeA" },
    { name: "Alicedrgdgr", photo: "https://th.bing.com/th/id/R.3f3b68c0fde58eea7448cef9b640e299?rik=c0t2b8nVH4v%2f2g&pid=ImgRaw&r=0" },
    { name: "Bobgjgyj", photo: "https://media.licdn.com/dms/image/C4E03AQGLnyRmZC2Bqg/profile-displayphoto-shrink_800_800/0/1639917335217?e=2147483647&v=beta&t=FSAEu3CsIouOPYF8SSMdPOmhkxk2YL9Evanqa8RWp8w" },
    { name: "Charliedrdrg", photo: "https://media.licdn.com/dms/image/D4E03AQHzzxWRG32rSg/profile-displayphoto-shrink_800_800/0/1694695270643?e=2147483647&v=beta&t=hye4Kd4NQPipsKPb2O0irsoyM6n9BE6t0Qn-jajPQeA" },
    { name: "Alicebhmbhm", photo: "https://th.bing.com/th/id/R.3f3b68c0fde58eea7448cef9b640e299?rik=c0t2b8nVH4v%2f2g&pid=ImgRaw&r=0" },
    { name: "Bobadadw", photo: "https://media.licdn.com/dms/image/C4E03AQGLnyRmZC2Bqg/profile-displayphoto-shrink_800_800/0/1639917335217?e=2147483647&v=beta&t=FSAEu3CsIouOPYF8SSMdPOmhkxk2YL9Evanqa8RWp8w" },
    { name: "Charlieawdawd", photo: "https://media.licdn.com/dms/image/D4E03AQHzzxWRG32rSg/profile-displayphoto-shrink_800_800/0/1694695270643?e=2147483647&v=beta&t=hye4Kd4NQPipsKPb2O0irsoyM6n9BE6t0Qn-jajPQeA" },
    { name: "Alicegjgyj", photo: "https://th.bing.com/th/id/R.3f3b68c0fde58eea7448cef9b640e299?rik=c0t2b8nVH4v%2f2g&pid=ImgRaw&r=0" },
    { name: "Bobxcbbcx", photo: "https://media.licdn.com/dms/image/C4E03AQGLnyRmZC2Bqg/profile-displayphoto-shrink_800_800/0/1639917335217?e=2147483647&v=beta&t=FSAEu3CsIouOPYF8SSMdPOmhkxk2YL9Evanqa8RWp8w" },
    { name: "Charlieadadw", photo: "https://media.licdn.com/dms/image/D4E03AQHzzxWRG32rSg/profile-displayphoto-shrink_800_800/0/1694695270643?e=2147483647&v=beta&t=hye4Kd4NQPipsKPb2O0irsoyM6n9BE6t0Qn-jajPQeA" },
    { name: "Alicertyr", photo: "https://th.bing.com/th/id/R.3f3b68c0fde58eea7448cef9b640e299?rik=c0t2b8nVH4v%2f2g&pid=ImgRaw&r=0" },
    { name: "Bobjklj", photo: "https://media.licdn.com/dms/image/C4E03AQGLnyRmZC2Bqg/profile-displayphoto-shrink_800_800/0/1639917335217?e=2147483647&v=beta&t=FSAEu3CsIouOPYF8SSMdPOmhkxk2YL9Evanqa8RWp8w" },
    { name: "Charliecxvx", photo: "https://media.licdn.com/dms/image/D4E03AQHzzxWRG32rSg/profile-displayphoto-shrink_800_800/0/1694695270643?e=2147483647&v=beta&t=hye4Kd4NQPipsKPb2O0irsoyM6n9BE6t0Qn-jajPQeA" },
  ];
const rank = [];

const socket = new WebSocket(`ws://${location.host}`);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registrado com sucesso:', registration.scope);
        })
        .catch(error => {
          console.log('Falha ao registrar o Service Worker:', error);
        });
    });
  }




socket.addEventListener('open', () => {
    console.log('Conectado ao WebSocket');
});




  document.getElementById('toggle-user-list').addEventListener('click', () => {
    const userListContainer = document.querySelector('.user-list');
    const dashboard = document.querySelector('.dashboard');

    // Alterna a classe expandida
    const isExpanded = userListContainer.classList.toggle('expanded');

    // Oculta outras listas quando expandido
    if (isExpanded) {
        dashboard.classList.add('expanded');
        document.getElementById('toggle-user-list').textContent = 'Voltar';
    } else {
        dashboard.classList.remove('expanded');
        document.getElementById('toggle-user-list').textContent = 'Expandir';
    }
});


socket.addEventListener('message', event => {




    const data = JSON.parse(event.data);

    if (data.type === 'initialData') {
        users.length = 0;
        users.push(...data.users);

        rank.length = 0;
        rank.push(...data.rank);

        renderUserList();
        renderRankList();
    } else if (data.type === 'updateUsers') {
        users.length = 0;
        users.push(...data.users);
        renderUserList();
    } else if (data.type === 'updateRank') {
        rank.length = 0;
        rank.push(...data.rank);
        renderRankList();
        renderUserList(); // Chamar renderUserList() aqui
    } else if (data.type === 'chatMessage') {
        displayChatMessage(data);
    }
});

socket.addEventListener('close', () => {
    console.log('Conexão perdida. Tentando reconectar em 5 segundos...');
    setTimeout(() => location.reload(), 5000);
});

function renderUserList() {
    const userList = document.getElementById("user-list");
    userList.innerHTML = "";

    users.forEach(user => {
        const isRanked = rank.find(u => u.name === user.name);
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${user.photo}" alt="Profile Picture">
            <span>${user.name}</span>
            <div class="actions">
                ${
                  isRanked
                    ? `<button onclick="updatePoints('${user.name}', 10)">+10</button>
                       <button onclick="updatePoints('${user.name}', -10)" class="remove">-10</button>
                       <button onclick="removeFromRank('${user.name}')" class="remove">Remover</button>`
                    : `<button onclick="addToRank('${user.name}')">Adicionar</button>`
                }
            </div>
        `;
        userList.appendChild(li);
    });
}

function clearRank(){

    rank.forEach(function(item) {
        removeFromRank(item.name)
    });


    // Feedback visual (opcional)
    const message = document.createElement('div');
    message.classList.add('notification');
    message.textContent = `Rank resetado! Iniciando novo...`;
    document.body.appendChild(message);

    // Remove após 2 segundos
    setTimeout(() => message.remove(), 2000);

    
}




function renderRankList() {
    const rankList = document.getElementById("rank-list");

    // Ordena o ranking por pontos
    rank.sort((a, b) => b.points - a.points);

    rankList.innerHTML = ""; // Limpa o conteúdo antigo

    rank.forEach((user, index) => {
        const li = document.createElement("li");

        // Destaque para os 3 primeiros
        if (index === 0) li.classList.add("first-place");
        else if (index === 1) li.classList.add("second-place");
        else if (index === 2) li.classList.add("third-place");

        li.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <h1>${index + 1}°</h1>
                <img src="${user.photo}" alt="Profile Picture" style="width: 50px; height: 50px; border-radius: 50%;">
                <span style="font-size:18px; font-weight: bold;">${user.name}</span>
            </div>
            <span style="font-weight: bold;">${user.points} pontos</span>
        `;
        rankList.appendChild(li);
    });
}

function addToRank(userName) {
    socket.send(JSON.stringify({
        type: 'addToRank',
        username: userName
    }));
}

function removeFromRank(userName) {
    socket.send(JSON.stringify({
        type: 'removeFromRank',
        username: userName
    }));
}




function updatePoints(userName, points) {
    const rankUser = rank.find(u => u.name === userName);
    if (rankUser) {
        // Enviar atualização para o servidor WebSocket
        socket.send(JSON.stringify({
            type: 'updatePoints',
            username: userName,
            points: points
        }));

        // Feedback visual (opcional)
        const message = document.createElement('div');
        message.classList.add('notification');
        message.textContent = `Adicionou ${points} pontos para ${userName}`;
        document.body.appendChild(message);

        // Remove após 2 segundos
        setTimeout(() => message.remove(), 2000);
    }
}

function displayChatMessage(data) {
        // Exibe a mensagem no chat
        const chatContainer = document.querySelector('.container-chat ul');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${data.username}: ${data.comment}`;
        chatContainer.appendChild(messageElement);
    
        chatContainer.scrollTop = chatContainer.scrollHeight;


}

// Inicializa as listas
renderUserList();
renderRankList();
