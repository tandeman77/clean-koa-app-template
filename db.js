const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
const sequelize = new Sequelize(
  process.env.db_name,
  process.env.db_user,
  process.env.db_password,
  {
    host: "localhost",
    dialect: "postgres"
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("authenticate ok");
  })
  .catch(e => {
    console.error(e);
  });

module.exports = sequelize;
