import mongoose from "mongoose";
import config from './index.js';

const db = mongoose.connection;

db.on('connecting', () => {
  console.log('Intentando conectar a BD');
});

db.on('connected', () => {
  console.log('Se ha conectado a la BD');
});

db.on('error', () => {
  console.log('Error en la conexion a BD');
});

export default () => {
  mongoose.connect(config.database.uri);
}