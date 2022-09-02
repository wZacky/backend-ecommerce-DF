import bcrypt from 'bcrypt';
import { User } from "../models/User.js"
import config from '../config/index.js';

const registerSuperAdmin = async () => {
  try {

    const superAdmin = await User.findOne({email: config.superAdmin.email});

    if (!superAdmin) {
      const password = await bcrypt.hash(config.superAdmin.password, 2);

      await User.create({
        firstName: 'Super',
        lastName: 'Admin',
        phoneNumber: '987123645',
        email: 'superadmin@gmail.com',
        password,
        role: 'admin',
      })

      console.log('Super Admin registered');
    }

    console.log('Super Admin already registered');
  } catch (error) {
    console.log(error);
  }
}


export { registerSuperAdmin };