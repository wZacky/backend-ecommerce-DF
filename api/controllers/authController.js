import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
import { User } from "../models/User.js";
import config from '../config/index.js'

const register = async (req, res) => {
  try {
  const { password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 3);
  req.body.password = encryptedPassword;

  const user = await User.create(req.body);
  user.password = undefined;

  return res.json({
    msg: 'Registered User',
    data: { user }
  })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error when registering User',
      error,
    })
  }

}

// login:
// 1.verificar si existen esas credenciales y si son correctas
// 2.extraer la informacion del usuario correspondiente y tokenizarlo
// 3.devolver ese token al usuario

const login = async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await User.findOne({email: email});

    if(!user){
      return res.status(404).json({
        msg: 'Nonexistent email',
      })
    }

    const samePasswords = await bcrypt.compare(password, user.password);

    if (!samePasswords) {
      return res.status(401).json({
        msg: 'Invalid credentials',
      })
    }

    const expirationTokenDate = new Date();
    expirationTokenDate.setMinutes(expirationTokenDate.getMinutes() + 4);

    const payloadToken = {
      userId: user.id,
      role: user.role,
      expirationTokenDate,
    }

    const token = jwt.encode(payloadToken, config.jwt.secret);
    
    return res.json({
      msg: 'Welcome',
      data: { token },
    })

    
  } catch (error) {
    return res.status(500).json({
      msg: 'Error when logging in',
    })
  }
}

export { register, login };