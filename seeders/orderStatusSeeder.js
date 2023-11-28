const { OrderStatus } = require("../models");

module.exports = async () => {
  const ordersStatus = [
    { name: "Pending" },
    { name: "In process" },
    { name: "Traveling" },
    { name: "Delivered" },
  ];

  await OrderStatus.bulkCreate(ordersStatus);
  console.log("[Database] Se corrió el seeder de Orders Status.");
};


