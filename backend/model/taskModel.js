const DataTypes = require("sequelize");
const sql = require("./sql");

const Task = sql.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

(async () => {
  await Task.sync();
  console.log("Task table created successfully");
})();

module.exports = Task;
