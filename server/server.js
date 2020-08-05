const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const staticPath = path.join(__dirname, '../public');
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static(staticPath));
// app.use(router);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build/index.html"));
});

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});