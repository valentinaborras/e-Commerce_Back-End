const { faker } = require("@faker-js/faker");
const { Customer } = require("../models");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

faker.locale = "es";

module.exports = async () => {
  const customers = [];
  const encryptedPassword = await bcrypt.hash("1234", 10);
  customers.push({
    id: "a0000000-b000-c000-d000-000000000001",
    firstname: "Test",
    lastname: "Tester",
    email: "test@test.com",
    phone: "099001122",
    password: encryptedPassword,
    avatar: "test-avatar.jpg",
    country: "Uruguay",
    address: "Av. Uruguay 1989",
    city: "Montevideo",
    zipcode: "11800",
  });

  customers.push({
    id: "a0000000-b000-c000-d000-000000000009",
    firstname: "Alfonso",
    lastname: "Espinoza",
    email: "aespinoza@gmail.com",
    phone: "098764878",
    password: encryptedPassword,
    avatar: "alfonso-espinoza2.jpg",
    country: "Uruguay",
    address: "Mercedes 1517",
    city: "Montevideo",
    zipcode: "11800",
  });

  customers.push({
    id: "a0000000-b000-c000-d000-000000000002",
    firstname: "Carla",
    lastname: "Benavides",
    email: "carlabenavides@gmail.com",
    phone: "099761134",
    password: encryptedPassword,
    avatar: "carla-benavides2.jpg",
    country: "Uruguay",
    address: "18 de Julio 787",
    city: "Montevideo",
    zipcode: "11800",
  });

  customers.push({
    id: "a0000000-b000-c000-d000-000000000003",
    firstname: "Felipe",
    lastname: "Torres",
    email: "felipet21@gmail.com",
    phone: "098994671",
    password: encryptedPassword,
    avatar: "felipe-torres2.jpg",
    country: "Uruguay",
    address: "Charrua 1653",
    city: "Montevideo",
    zipcode: "11800",
  });

  customers.push({
    id: "a0000000-b000-c000-d000-000000000005",
    firstname: "Olivia",
    lastname: "Zorita",
    email: "olizorita@gmail.com",
    phone: "099035765",
    password: encryptedPassword,
    avatar: "olivia-zorita2.jpg",
    country: "Uruguay",
    address: "Rivadavia 1965",
    city: "Montevideo",
    zipcode: "11800",
  });

  customers.push({
    id: "a0000000-b000-c000-d000-000000000006",
    firstname: "Miguel",
    lastname: "Romo",
    email: "migueromo54@gmail.com",
    phone: "091259476",
    password: encryptedPassword,
    avatar: "miguel-romo.jpg",
    country: "Uruguay",
    address: "Luis Alberto de Herrera 695",
    city: "Montevideo",
    zipcode: "11800",
  });

  customers.push({
    id: "a0000000-b000-c000-d000-000000000008",
    firstname: "Antonia",
    lastname: "Cuello",
    email: "antoniacuello@gmail.com",
    phone: "092648266",
    password: encryptedPassword,
    avatar: "antonia-cuello2.jpg",
    country: "Uruguay",
    address: "Isla de Flores 1584",
    city: "Montevideo",
    zipcode: "11800",
  });

  await Customer.bulkCreate(customers);
  console.log("[Database] Se corrió el seeder de Customers.");
};


