import { io } from "./server.js"

io.on("connection", (socket) => {
  console.log('Client Connected ID:', socket.id)

  socket.on('text-edit', (text) => {
    socket.broadcast.emit('send-text', text)// Envia apenas para outros clientes e nao para o que esta fazendo o evento
  }) // Utilizando o evento criado no front

  socket.on("disconnect", (motivo) => {
    console.log(
      `Client "${socket.id}" desconected! Reason: ${motivo}`
    );
  }); // Encerra a conexão

}) // Escutar algum evento



