import express from 'express';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import sellerRoutes from './routes/sellerRoutes.js';
import productRoutes from './routes/productRoutes.js';
import { isAdminAuth } from './middlewares/authAdminValidator.js';
import { isSellerAuth } from './middlewares/authSellerValidator.js';

const api = express();

api.use(express.json());

api.get('/status', (req, res) => {
  return res.json({
    msg: 'API up',
  })
})

api.use(authRoutes);
api.use('/admins', adminRoutes);
//api.use('/seller', isSellerAuth)
api.use('/categories', categoryRoutes);
api.use('/sellers', sellerRoutes);
// TODO: aqui va el middleware que validara el token que se envia
api.use('/products', productRoutes);

export default api;