import jwt from 'jwt-simple';
import config from '../config/index.js';
import { User } from '../models/User.js';

const isAdminAuth = async (req, res, next) => {
  /**
   * 1. Validar que este trayendo el token,
   * 2. Validar que el token aun no expire
   * 3. Validar que el rol sea de tipo admin,
   * 4. Registrar el body enviado en BD
   * 5. Responder con la info registrada
   */

  try {
    const token = req.headers.authorization;
  
    if (!token) {
      res.status(400).json({
        msg: 'Missing authorization header',
      })
    }
  
    const dataToken = jwt.decode(token, config.jwt.secret);
  
    const user = await User.findById(dataToken.userId);
  
    if (!user) {
      return res.status(401).json({
        msg: 'Invalid token-user',
      })
    } else {
      if (user.role !== 'admin') {
        return res.status(401).json({
          msg: 'Invalid role',
        })
      }
    }

    const expirationDate = new Date(dataToken.expirationTokenDate);
    if (expirationDate.getTime() < new Date().getTime()) {
      return res.status(400).json({
        msg: 'Token expired',
      })
    }
  
    next()
  } catch (error) {
    return res.status(401).json({
      msg: 'INVALID TOKEN',
      error,
    })
  }

}

export { isAdminAuth };