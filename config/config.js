const dotenv = require("dotenv");
dotenv.config({path: __dirname + "/../.env"});

module.exports = {
  "development": {
    "username": process.env.DEV_USER,
    "password": process.env.DEV_PASS,
    "database": process.env.DEV_DATA,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "use_env_variable" : "JAWSDB_URL",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
