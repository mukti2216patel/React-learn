const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const path = require('path');

app.use(express.static(path.join(__dirname)));

// Serve the static HTML file
app.get('/', (req, res) => {
 res.sendFile('index.html');
});

// Listen for socket connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('chat', (msg) => {
    console.log(msg);
    io.emit('chat', msg+" hii");
    // socket.emit('chat' , msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
