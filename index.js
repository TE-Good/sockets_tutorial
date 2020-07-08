const express = require('express')
// var app = require('express')();
const app = express()
const path = require('path')
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'frontend/index.html');
});

io.on('connection', socket => {
  socket.on('chat message', msg => {
    console.log('message: ' + msg)
    io.emit('chat message', msg)
  })
})

// io.on('connection', (socket) => {
//   socket.broadcast.emit('Welcome to the chat!')
// });
  
// console.log('a user connected')
// socket.on('disconnect', () => {
//   console.log('user disconnected')
// })

http.listen(3000, () => {
  console.log('listening on *:3000');
});