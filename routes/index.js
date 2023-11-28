// Import routes
const authRoutes = require("./authRoutes");
const customerRoutes = require("./customerRoutes");
const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const orderRoutes = require("./orderRoutes");
const dataBaseRoutes = require("./dataBaseRoutes");

const checkJwt = require("../middlewares/checkJwt");
const isAdmin = require("../middlewares/isAdmin");

module.exports = (app) => {
  app.use("/api/tokens", authRoutes);
  app.use("/api/customers", customerRoutes);
  app.use("/api/admins", adminRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/categories", categoryRoutes);
  app.use("/api/orders", orderRoutes);
  app.use("/api/resetdatabase", dataBaseRoutes);
  app.use("/", (req, res) => {
    res.send("HackPlants Server Listening...");
  });
};
