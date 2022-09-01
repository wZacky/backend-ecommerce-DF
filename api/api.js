import express from 'express';
import authRoutes from './routes/authRoutes.js';

const api = express();

api.use(express.json());

api.get('/status', (req, res) => {
  return res.json({
    msg: 'API up',
  })
})

api.use(authRoutes);

export default api;