const Sequelize = require("sequelize");

const sql = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "root_password",
  database: "todo_app_db",
});

module.exports = sql;
