const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

class Customer extends Model {
  static initModel(sequelize) {
    Customer.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: () => uuidv4(),
          primaryKey: true,
        },
        firstname: {
          type: DataTypes.STRING,
        },
        lastname: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        avatar: {
          type: DataTypes.STRING,
        },
        country: {
          type: DataTypes.STRING,
        },
        city: {
          type: DataTypes.STRING,
        },
        address: {
          type: DataTypes.STRING,
        },
        zipcode: {
          type: DataTypes.INTEGER,
        },
        phone: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "customer",
      },
    );
    return Customer;
  }
}

module.exports = Customer;
