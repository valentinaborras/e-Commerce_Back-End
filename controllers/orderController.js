const { Order, Customer, OrderStatus, Product } = require("../models");

async function index(req, res) {
  try {
    const orders = await Order.findAll({ include: [{ model: Customer }, { model: OrderStatus }] });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ err: "Error" });
  }
}

async function show(req, res) {
  try {
    const order = await Order.findByPk(req.params.id);
    res.json(order);
  } catch (err) {
    res.status(500).json({ err: "Error" });
  }
}

async function store(req, res) {
  try {
    const order = {
      cart: req.body.cart,
      payment: req.body.payment,
      billing: req.body.billing,
      customerId: req.body.customerId,
      total: req.body.total,
      orderstatusId: 1,
      id: req.body.id,
    };
    const orderCreated = await Order.create(order);

    const cart = req.body.cart;
    //bajar stock
    cart.forEach(async (item) => {
      const product = await Product.findOne({
        where: { id: item.id },
      });
      product.update({ stock: product.stock - item.count });
    });
    res.json(orderCreated);
  } catch (err) {
    res.status(500).json({ err: "Error" });
  }
}

async function update(req, res) {
  try {
    const order = await Order.findByPk(req.params.id);
    order.update({ orderstatusId: req.body.orderstatusId });
    res.json(order);
  } catch (err) {
    res.status(500).json({ err: "Error" });
  }
}

async function destroy(req, res) {
  try {
    const order = await Order.findByPk(req.params.id);
    await order.destroy();
    res.json(order);
  } catch (err) {
    res.status(500).json({ err: "Error" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
