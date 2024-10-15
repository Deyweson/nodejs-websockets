const socket = io();


socket.on('send-text', (text) => {
  UpdateText(text)
})

function SendText(text) {
  socket.emit("text-edit", text)
}

export { SendText }