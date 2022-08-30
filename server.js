import http from 'http';
import api from './api/api.js';
import database from './api/config/database.js';
import config from './api/config/index.js';

const server = http.createServer(api);
const PORT = config.server.port;

server.on('listening', () => {
  console.log('Server up in port: ', PORT);
})

server.on('error', () => {
  console.log('Error to execute server in port: ', PORT);
})

server.listen(PORT);
database();