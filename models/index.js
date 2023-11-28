const { Sequelize } = require("sequelize");

const sequelizeOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_CONNECTION,
  logging: false,
};
if (process.env.DB_CONNECTION === "postgres") {
  sequelizeOptions.dialectModule = require("pg");
}
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  sequelizeOptions,
);

const Admin = require("./Admin");
const Category = require("./Category");
const Customer = require("./Customer");
const Order = require("./Order");
const OrderStatus = require("./OrderStatus");
const Product = require("./Product");

Customer.initModel(sequelize);
Order.initModel(sequelize);
OrderStatus.initModel(sequelize);
Product.initModel(sequelize);
Category.initModel(sequelize);
Admin.initModel(sequelize);

Customer.hasMany(Order, { onDelete: "CASCADE", hooks: true });
Order.belongsTo(Customer, { foreignKey: { allowNull: false, onDelete: "CASCADE" } });

Order.belongsTo(OrderStatus, { foreignKey: { allowNull: false, onDelete: "CASCADE" } });
OrderStatus.hasMany(Order, { onDelete: "CASCADE", hooks: true });

Product.belongsTo(Category, { foreignKey: { allowNull: false, onDelete: "CASCADE" } });
Category.hasMany(Product, { onDelete: "CASCADE", hooks: true });

module.exports = {
  sequelize,
  Customer,
  Admin,
  Category,
  Order,
  OrderStatus,
  Product,
};
