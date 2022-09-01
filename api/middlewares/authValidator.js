import jwt from 'jwt-simple';
import config from '../config/index.js';

const authValidator = (req, res, next) => {
  /**
   * 1. Validar que este trayendo el token,
   * 2. Validar que el token aun no expire
   * 3. Validar que el rol sea de tipo admin,
   * 4. Registrar el body enviado en BD
   * 5. Responder con la info registrada
   */

  const token = req.headers.authorization;

  if (!token) {
    res.status(400).json({
      msg: 'Missing authorization header',
    })
  }

  const dataToken = jwt.decode(token, config.jwt.secret);

  /* if (dataToken.) {
    
  } */
}