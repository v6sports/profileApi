// import { Dialect, Sequelize } from 'sequelize'
const Seq = require('sequelize');

const serverless = require('serverless-http');
const express = require('express')
const app = express()

const dbName = 'usaclive' || process.env.DB_NAME
const dbUser = 'admin' || process.env.DB_USER
const dbHost = 'v6dbv2.c1gh7vsmbv6p.ap-south-1.rds.amazonaws.com' || process.env.DB_HOST
const dbDriver = 'mysql' || process.env.DB_DRIVER
const dbPassword = 'vkdbpass1234!' || process.env.DB_PASSWORD

const sequelizeConnection = new Seq.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver
})

app.post("/", function (req, res,next) {
    let body = JSON.parse(req.body)
    try {
        if (req?.body?.query) {
            sequelizeConnection.query(req?.body?.query).then(response => {
                
                res.status(200).jsonp(response)
            }).catch(error => {
                res.status(200).jsonp( {
                    statusCode: 200,
                    body: 'error',
                });
            })
        }
        else {
            res.status(200).jsonp( {
                statusCode: 200,
                body: 'error',
            });
        }
    }
    catch (e) {
        return e
    }

});


module.exports.handler = serverless(app)