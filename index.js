// import { Dialect, Sequelize } from 'sequelize'
const Seq = require('sequelize');
const dbName = 'usaclive' ||  process.env.DB_NAME
const dbUser = 'admin' || process.env.DB_USER
const dbHost = 'v6dbv2.c1gh7vsmbv6p.ap-south-1.rds.amazonaws.com' || process.env.DB_HOST
const dbDriver = 'mysql'|| process.env.DB_DRIVER 
const dbPassword =  'vkdbpass1234!' || process.env.DB_PASSWORD

const sequelizeConnection = new Seq.Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
})

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Updated Through Github Action work anrag  😁'),
    };
    return response;
};
