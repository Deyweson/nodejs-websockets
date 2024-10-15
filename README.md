# Node.js - WebSockets

Projeto Guiado realizado durante um curso com intuito de aprender o que é e como utilizar o WebSockers com node JS Utilizando a lib Socket.Io

## Web Sockets

Protocolo:

Cliente ← eventos→ Servidor

- Comunicação baseada em eventos
- Cliente se conecta ao servidor (socket)
- Cliente ou servidor podem emitir um evento (comunicação bidirecional)

## Desenvolvendo Projeto com WebSockets

```bash
  npm init -y       # Comando para iniciar projeto node
  npm i express@4   # Comando para instalar o express que será o 
                    # Framework utilizado para criar o server
  npm i socket.io@4 # Instalação do framework para comunicação websocket
  npm i nodemon -D  # Lib para reload automatico do server
```