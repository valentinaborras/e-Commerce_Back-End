const { Admin } = require("../models");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

module.exports = async () => {
  const admins = [];
  const testEncryptedPassword = await bcrypt.hash("1234", 10);
  const encryptedPassword = await bcrypt.hash("admin4", 10);

  admins.push({
    id: uuidv4(),
    firstname: "Nicolás",
    lastname: "Valsecchi",
    email: "nicovalsecchi@gmail.com",
    password: encryptedPassword,
    avatar: "nicolasValsecchi.jpg",
  });
  admins.push({
    id: uuidv4(),
    firstname: "Lia",
    lastname: "Torres",
    email: "liatorres.439@gmail.com",
    password: encryptedPassword,
    avatar: "liaTorres2.jpg",
  });
  admins.push({
    id: uuidv4(),
    firstname: "Agustín",
    lastname: "Lavaggi",
    email: "agustinlavaggi4@gmail.com",
    password: encryptedPassword,
    avatar: "agustinLavaggi2.jpg",
  });
  admins.push({
    id: uuidv4(),
    firstname: "Valentina",
    lastname: "Borrás",
    email: "vborras17@gmail.com",
    password: encryptedPassword,
    avatar: "valentinaBorras2.jpg",
  });
  admins.push({
    id: uuidv4(),
    firstname: "Lautaro",
    lastname: "López",
    email: "lautato15@gmail.com",
    password: encryptedPassword,
    avatar: "lautaroLopez.jpg",
  });
  admins.push({
    id: uuidv4(),
    firstname: "test",
    lastname: "test",
    email: "test@example.com",
    password: testEncryptedPassword,
    avatar: "test-avatar.jpg",
  });

  await Admin.bulkCreate(admins);
  console.log("[Database] Se corrió el seeder de Admins.");
};


