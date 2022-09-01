import express from 'express';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import { isAdminAuth } from './middlewares/authAdminValidator.js';

const api = express();

api.use(express.json());

api.get('/status', (req, res) => {
  return res.json({
    msg: 'API up',
  })
})

api.use(authRoutes);
api.use('/admin', isAdminAuth, adminRoutes);
// TODO: aqui va el middleware que validara el token que se envia

export default api;