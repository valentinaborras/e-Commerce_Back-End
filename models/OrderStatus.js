const { Model, DataTypes } = require("sequelize");

class OrderStatus extends Model {
  static initModel(sequelize) {
    OrderStatus.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "orderstatus",
      },
    );
    return OrderStatus;
  }
}

module.exports = OrderStatus;
