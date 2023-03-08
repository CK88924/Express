const mysql = require ('mysql');
const yaml = require('js-yaml');
const fs = require('fs');
const raw = fs.readFileSync('windows.yaml')
const data = yaml.load(raw)
const myPool = mysql.createPool ({
  connectionLimit: 200,
  host: data.db.host,
  user: data.db.user,
  port: data.db.port,
  password: data.db.password,
  database: data.db.database,
});
exports.sessionConnection = mysql.createConnection ({
  connectionLimit: 200,
  host: data.db.host,
  user: data.db.user,
  port: data.db.port,
  password: data.db.password,
  database: data.db.database,
  });
  
  exports.query = (sql, values) => {
    return new Promise ((resolve, reject) => {
      myPool.query (sql, values, (err, rows) => {
        if (err) {
          resolve (false);
          console.log (err + ' , ' + rows);
        } else {
          resolve (rows);
        }
      });
    });
  };
  
  module.exports = exports;
  
