import { Sequelize, QueryTypes } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306, // Default MySQL port
  username: 'root',
  password: 'P@ssw0rd#',
  database: 'etracs_users',
});

export default sequelize;
