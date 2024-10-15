import express from 'express'
import url from 'url'
import path from 'path'
import http from 'node:http'
import { Server } from 'socket.io'


const app = express()
const port = process.env.port || 8000

const thisPath = url.fileURLToPath(import.meta.url) // pega o caminho do diretorio atual
const publicPath = path.join(thisPath, '../..', 'public') // ../.. -> volta uma pagina e depois acessa a pasta public

app.use(express.static(publicPath)) // Diz ao express que ele pode entregar estaticamente os arquivos da pagina


const serverHttp = http.createServer(app)


serverHttp.listen(port, () => console.log(`Server is running... at port ${port}`))

export const io = new Server(serverHttp)

io.on("connection", (socket) => {
  console.log('Client Connected ID:' , socket.id)
}) // Escutar algum evento