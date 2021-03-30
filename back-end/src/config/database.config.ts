export default (): Record<string, any> => ({
  db_connection: process.env.TYPEORM_CONNECTION || 'mysql',
  db_host: process.env.TYPEORM_HOST,
  db_port: parseInt(process.env.TYPEORM_PORT, 10) || 3306,
  db_username: process.env.TYPEORM_USERNAME,
  db_password: process.env.TYPEORM_PASSWORD,
  db_name: process.env.TYPEORM_DATABASE,
});
