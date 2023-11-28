const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: () => uuidv4(),
          primaryKey: true,
        },
        cart: {
          type: DataTypes.JSON,
        },
        payment: {
          type: DataTypes.TEXT,
        },
        billing: {
          type: DataTypes.JSON,
        },
        total: {
          type: DataTypes.DECIMAL(10, 2),
        },
      },
      {
        sequelize,
        modelName: "order",
      },
    );
    return Order;
  }
}

module.exports = Order;
