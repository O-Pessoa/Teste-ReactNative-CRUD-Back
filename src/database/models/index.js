const Sequelize = require("sequelize");
const config = require("../../config/database");

const sequelize = new Sequelize(config);

const db = {
  sequelize,
  Sequelize,
  User: require("./user")(sequelize, Sequelize.DataTypes),
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
