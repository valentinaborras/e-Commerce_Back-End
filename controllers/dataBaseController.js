const resetDataBase = async (req, res) => {
  const db = require("../models");
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");
  await require("../seeders/customerSeeder")();
  await require("../seeders/categorySeeder")();
  await require("../seeders/adminSeeder")();
  await require("../seeders/orderStatusSeeder")();
  await require("../seeders/productSeeder")();
  await require("../seeders/orderSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");

  res.json("Database has been restored");

};

module.exports = { resetDataBase };
