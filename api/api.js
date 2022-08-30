import express from 'express';

const api = express();

api.use(express.json());

api.get('/status', (req, res) => {
  return res.json({
    msg: 'API up',
  })
})

export default api;