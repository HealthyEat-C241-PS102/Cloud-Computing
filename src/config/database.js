const Sequelize = require('sequelize');
require('dotenv').config();
const mysql2 = require('mysql2');

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: isProduction ? `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}` : process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        dialectModule: mysql2,
        define: {
            timestamps: false
        },
        dialectOptions: isProduction ? {
            socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
        } : {}
    }
);

module.exports = sequelize;
