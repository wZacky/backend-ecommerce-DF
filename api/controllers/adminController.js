/* import bcrypt from 'bcrypt';
import { User } from "../models/User" */

/* const registerAdmin = async (req, res) => {
  try {

    const {password} = req.body;

    const encryptedPassword = await bcrypt.hash(password, 3);

    const admin = req.body;
    admin.password = encryptedPassword;
    
    await User.create(req.body);



    return res.json({

    })
    
  } catch (error) {
    return res.status(500).json({
      msg: 'Error when registering admin',
      error,
    })
  }
} */