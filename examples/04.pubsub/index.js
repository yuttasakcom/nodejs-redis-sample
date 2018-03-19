const http = require('http')
const socketIO = require('socket.io')
const app = require('express')()
const path = require('path')

app.get('/', (_, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', socket => {
  console.log('New user connect')

  socket.on('chat', (msg, cb) => {
    console.log(msg)
    io.emit('reply', msg)
  })

  socket.on('disconnect', () => console.log('User was disconnected'))
})

server.listen(3000, () => {
  console.log('Server is running on port:3000')
})
