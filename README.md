# Tiktok Live Score Tracker Overlay

**Tiktok Live Score Tracker** é uma aplicação Node.js que permite acompanhar e gerenciar interações em uma live no TikTok. Este projeto é ideal para criadores de conteúdo que desejam monitorar o chat em tempo real e atribuir pontos para os participantes, criando um sistema dinâmico de ranking.

A aplicação se conecta à live do TikTok, recebe mensagens do chat, permite adicionar usuários ao ranking, ajustar pontuações e exibe as informações em uma interface de fácil utilização. Além disso, suporta customização do nome da live por meio de um arquivo `.txt` para maior flexibilidade. O suporte a **PWA** permite que a aplicação seja instalada no navegador para acesso rápido e fácil.

---

## Objetivo do Projeto

- **Acompanhar interações do chat** em uma live no TikTok.
- **Gerenciar um sistema de ranking** com pontuações atribuídas aos usuários.
- **Oferecer uma interface para adicionar ou remover usuários do ranking** e ajustar os pontos em tempo real.
- **Personalizar o nome da live** diretamente de um arquivo `live-name.txt`.
- **Instalar como PWA** para facilitar o acesso e uso contínuo no navegador.

---

## Funcionalidades

- Conexão em tempo real com o chat da live no TikTok.
- Recebimento e exibição de mensagens do chat na interface.
- Sistema de ranking dinâmico:
  - Adicionar usuários ao ranking.
  - Ajustar pontuações de forma interativa.
  - Remover usuários do ranking.
- Nome da live configurável por meio de um arquivo de texto.
- Interface visual responsiva com áreas para chat, ranking e configurações.
- **Progressive Web App (PWA)**:
  - Instalável diretamente no navegador.
  - Acesso offline básico para uso contínuo.

---

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento backend.
- **Express**: Framework para servir arquivos estáticos.
- **WebSocket (ws)**: Comunicação em tempo real entre servidor e cliente.
- **TikTok Live Connector**: Biblioteca para integração com lives do TikTok.
- **HTML/CSS/JavaScript**: Frontend para exibir informações e gerenciar o sistema.
- **Service Worker (PWA)**: Para suporte progressivo no navegador.

---

## Como Usar

### 1. Pré-requisitos

- **Node.js** instalado na máquina.
- Uma conta TikTok com permissão para usar o recurso TikTok Live.

### 2. Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/tiktok-live-score-tracker.git
   ```
2. Entre no diretório do projeto:

  ```bash
  cd tiktok-live-score-tracker
  ```
3. Instale as dependências:
  ```bash
    npm install
  ```
### 3. Configuração Crie um arquivo `live-name.txt` no diretório principal e insira o nome da sua live no TikTok: 
`seu-nome-de-usuario-tiktok` 

Certifique-se de que o arquivo contém apenas o nome da sua live. 

### 4. Executando o Servidor Inicie o servidor:

```bash npm start
```

O servidor será iniciado em `http://localhost:3000`.

Acesse no navegador para ver a interface.

### Usando como PWA

#### Instalação no Navegador:

- Abra a aplicação no navegador (Google Chrome, Edge ou outros navegadores compatíveis).
- Clique no ícone de "Instalar Aplicativo" (geralmente ao lado da barra de endereços).
- A aplicação será adicionada como um aplicativo instalável no desktop ou dispositivo móvel.

#### Acesso Rápido:

Após a instalação, o aplicativo pode ser acessado diretamente sem a necessidade de abrir o navegador.

### Estrutura do Projeto
```
tiktok-live-score-tracker/
├── public/
│ ├── index.html # Interface principal
│ ├── styles.css # Estilos da aplicação
│ ├── script.js # Lógica frontend
├── live-name.txt # Arquivo para definir o nome da live
├── server.js # Código do servidor
├── package.json # Configurações do projeto
├── service-worker.js # Arquivo para PWA (opcional)
└── README.md # Documentação do projeto
```
## Exemplo de Uso 
- Configure a live no TikTok.
- Adicione o nome da live ao arquivo `live-name.txt`.
- Inicie o servidor e acesse a interface no navegador.
- Monitore mensagens no chat e atribua pontos aos participantes para manter um ranking


