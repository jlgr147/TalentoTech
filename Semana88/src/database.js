const mysql = require ("promise-mysql");
constconection =
mysql.createConnection({host: "localhost",database: "sakila",
user:"root",
password:"123456"
})
constgetConection
=async()=>awaitconection;
module.exports={
getConection
}
