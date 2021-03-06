module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'shortly_development',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || '',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost',
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret',
  },
};
