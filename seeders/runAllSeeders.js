require("dotenv").config();

async function runAllSeeders() {
  await require("./customerSeeder")();
  await require("./categorySeeder")();
  await require("./adminSeeder")();
  await require("./orderStatusSeeder")();
  await require("./productSeeder")();
  await require("./orderSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();

module.exports = runAllSeeders;
