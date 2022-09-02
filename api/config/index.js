import dotenv from 'dotenv';

dotenv.config();

export default {
  server: {
    port: process.env.PORT,
  },
  database: {
    uri: process.env.DB_URI_ATLAS || process.env.DB_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  superAdmin: {
    email: process.env.SUPER_ADMIN_EMAIL,
    password: process.env.SUPER_ADMIN_PASSWORD,
  }
}