const  Sequelize  = require('sequelize');

let connectionString= '';
let ssl= false;

  connectionString = "postgres://husam:123456@localhost:5432/reports";
  ssl = {
    rejectUnauthorized: false,
  };


if (!connectionString) {
  throw new Error('Database url is not a valid postgres url or there is no url is given at all!');
}

module.exports  = new Sequelize(connectionString);
