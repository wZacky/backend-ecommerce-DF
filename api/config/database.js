import mongoose from "mongoose";
import { registerSuperAdmin } from "../controllers/adminController.js";
import config from './index.js';

const db = mongoose.connection;

db.on('connecting', () => {
  console.log('Intentando conectar a BD');
});

db.on('connected', async () => {
  console.log('Se ha conectado a la BD');
  try {
    await registerSuperAdmin()
  } catch (error) {
    console.log(error);
  }
});

db.on('error', () => {
  console.log('Error en la conexion a BD');
});

export default () => {
  mongoose.connect(config.database.uri);
}