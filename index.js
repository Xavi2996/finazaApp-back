const htt = require('http');

const app = require('./src/app');
const { error } = require('console');

require('dotenv').config();
const server = htt.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT);

server.on('listening', () => {
    console.log(`Servidor escichando puerto ${PORT}`);
});
 
server.on('error', (error) => console.log(error));