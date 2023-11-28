const { Order } = require("../models");
const { v4: uuidv4 } = require("uuid");

module.exports = async () => {
  const orders = [];
  orders.push(
    {
      id: uuidv4(),
      cart: [
        {
          id: 18,
          name: "Ficus elastica Tineke",
          description:
            "The Too Beautiful Ficus Tineke Rubber Tree is easy for beginners and a great starter plant! They can quickly grow up to 10' inside and do best in bright to moderate indirect light.  This rubber plant variety is considered 'new' and their high degree of color and variation is somewhat rare.",
          image: "Ficus-elastica-Tineke.png",
          price: "75",
          stock: 15,
          trending: true,
          slug: "ficus-tineke",
          categoryId: 3,
          count: 1,
        },
        {
          id: 5,
          name: "Blooming Kalanchoe",
          description:
            "Your new favorite colorful succulent! An easy-to-grow, long-blooming succulent, Kalanchoes are a mainstay of just about any low-care space that wants a splash of color! They love bright, natural light without much direct sun. Since it's actually a succulent, their fat, fleshy leaves don't want to be watered all the time. Instead, they prefer less frequent waterings (and a little more when they're flowering).",
          image: "Blooming-Kalanchoe.png",
          price: "22",
          stock: 15,
          trending: false,
          slug: "blooming-kalanchoe",
          categoryId: 1,
          count: 1,
        },
        {
          id: 12,
          name: "Boston Fern",
          description:
            "The iconic Boston Fern is perfect for an outdoor porch during the warmer months or grown year-round indoors. This Fern is tolerant of low light and appreciative of high humidity. It is also considered pet-friendly or non-toxic, making it safe to keep around curious four-legged friends.",
          image: "Boston-Fern.png",
          price: "25",
          stock: 15,
          trending: false,
          slug: "boston-fern",
          categoryId: 2,
          count: 3,
        },
        {
          id: 15,
          name: "Burgundy Rubber Tree",
          description:
            "The Burgundy Rubber Tree is easy for beginners and a great starter plant! They can quickly grow up to 8' inside and do best in bright to moderate indirect light.In general these plants leave our nursery when they are 16' to 28' tall (depending on the size). They are living plants and actual size may vary depending on the current crop.",
          image: "Burgundy-Rubber-Tree.png",
          price: "38",
          stock: 15,
          trending: true,
          slug: "burgundy-rubber-tree",
          categoryId: 3,
          count: 2,
        },
      ],
      payment: "Mercado Pago",
      billing: {
        firstname: "Test ",
        lastname: "Tester",
        email: "test@test.com",
        phone: "099001122",
        country: "Uruguay",
        city: "Montevideo",
        address: "Av. Uruguay 1989",
        zipcode: "11800",
      },
      customerId: "a0000000-b000-c000-d000-000000000001",
      total: 273,
      orderstatusId: 1,
    },
    {
      id: uuidv4(),
      cart: [
        {
          id: 5,
          name: "Blooming Kalanchoe",
          description:
            "Your new favorite colorful succulent! An easy-to-grow, long-blooming succulent, Kalanchoes are a mainstay of just about any low-care space that wants a splash of color! They love bright, natural light without much direct sun. Since it's actually a succulent, their fat, fleshy leaves don't want to be watered all the time. Instead, they prefer less frequent waterings (and a little more when they're flowering).",
          image: "Blooming-Kalanchoe.png",
          price: "22",
          stock: 15,
          trending: false,
          slug: "blooming-kalanchoe",
          createdAt: "2023-09-22T05:24:55.000Z",
          updatedAt: "2023-09-22T05:24:55.000Z",
          categoryId: 1,
          count: 1,
        },
        {
          id: 18,
          name: "Ficus elastica Tineke",
          description:
            "The Too Beautiful Ficus Tineke Rubber Tree is easy for beginners and a great starter plant! They can quickly grow up to 10' inside and do best in bright to moderate indirect light.  This rubber plant variety is considered 'new' and their high degree of color and variation is somewhat rare.",
          image: "Ficus-elastica-Tineke.png",
          price: "75",
          stock: 15,
          trending: true,
          slug: "ficus-tineke",
          categoryId: 3,
          count: 1,
        },
      ],
      payment: "Mercado Pago",
      billing: {
        firstname: "Test ",
        lastname: "Tester",
        email: "test@test.com",
        phone: "099001122",
        country: "Uruguay",
        city: "Montevideo",
        address: "Av. Uruguay 1989",
        zipcode: "11800",
      },
      customerId: "a0000000-b000-c000-d000-000000000001",
      total: 97,
      orderstatusId: 1,
    },
    {
      id: uuidv4(),
      cart: [
        {
          id: 18,
          name: "Ficus elastica Tineke",
          description:
            "The Too Beautiful Ficus Tineke Rubber Tree is easy for beginners and a great starter plant! They can quickly grow up to 10' inside and do best in bright to moderate indirect light.  This rubber plant variety is considered 'new' and their high degree of color and variation is somewhat rare.",
          image: "Ficus-elastica-Tineke.png",
          price: "75",
          stock: 15,
          trending: true,
          slug: "ficus-tineke",
          categoryId: 3,
          count: 1,
        },
      ],
      payment: "Mercado Pago",
      billing: {
        firstname: "Test ",
        lastname: "Tester",
        email: "test@test.com",
        phone: "099001122",
        country: "Uruguay",
        city: "Montevideo",
        address: "Av. Uruguay 1989",
        zipcode: "11800",
      },
      customerId: "a0000000-b000-c000-d000-000000000001",
      total: 75,
      orderstatusId: 1,
    },
    {
      id: uuidv4(),
      cart: [
        {
          id: 5,
          name: "Blooming Kalanchoe",
          description:
            "Your new favorite colorful succulent! An easy-to-grow, long-blooming succulent, Kalanchoes are a mainstay of just about any low-care space that wants a splash of color! They love bright, natural light without much direct sun. Since it's actually a succulent, their fat, fleshy leaves don't want to be watered all the time. Instead, they prefer less frequent waterings (and a little more when they're flowering).",
          image: "Blooming-Kalanchoe.png",
          price: "22",
          stock: 15,
          trending: false,
          slug: "blooming-kalanchoe",
          categoryId: 1,
          count: 1,
        },
      ],
      payment: "Mercado Pago",
      billing: {
        firstname: "Test ",
        lastname: "Tester",
        email: "test@test.com",
        phone: "099001122",
        country: "Uruguay",
        city: "Montevideo",
        address: "Av. Uruguay 1989",
        zipcode: "11800",
      },
      customerId: "a0000000-b000-c000-d000-000000000001",
      total: 22,
      orderstatusId: 1,
    },
    {
      id: uuidv4(),
      cart: [
        {
          id: 5,
          name: "Blooming Kalanchoe",
          description:
            "Your new favorite colorful succulent! An easy-to-grow, long-blooming succulent, Kalanchoes are a mainstay of just about any low-care space that wants a splash of color! They love bright, natural light without much direct sun. Since it's actually a succulent, their fat, fleshy leaves don't want to be watered all the time. Instead, they prefer less frequent waterings (and a little more when they're flowering).",
          image: "Blooming-Kalanchoe.png",
          price: "22",
          stock: 15,
          trending: false,
          slug: "blooming-kalanchoe",
          categoryId: 1,
          count: 1,
        },
      ],
      payment: "Mercado Pago",
      billing: {
        firstname: "Test ",
        lastname: "Tester",
        email: "test@test.com",
        phone: "099001122",
        country: "Uruguay",
        city: "Montevideo",
        address: "Av. Uruguay 1989",
        zipcode: "11800",
      },
      customerId: "a0000000-b000-c000-d000-000000000001",
      total: 22,
      orderstatusId: 1,
    },
  );

  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Orders.");
};


