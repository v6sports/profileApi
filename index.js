import { Dialect, Sequelize } from 'sequelize'
const dbName = 'usaclive' ||  process.env.DB_NAME
const dbUser = 'admin' || process.env.DB_USER
const dbHost = 'v6dbv2.c1gh7vsmbv6p.ap-south-1.rds.amazonaws.com' || process.env.DB_HOST
const dbDriver = 'mysql'|| process.env.DB_DRIVER 
const dbPassword =  'vkdbpass1234!' || process.env.DB_PASSWORD

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
})

exports.handler = async (event) => {
    let { req, qes } = event;
    let {query} = req.body;
    if(query){
        sequelizeConnection.query(query).then(response => {
          
            res.status(200).jsonp((response[0]))
        }).catch(error=>{
            res.status(500).jsonp(error)
        })
    }
    else {
        res.status(200).jsonp({message:"No Query Passed"})
    }
};
