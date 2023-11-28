const { Category } = require("../models");

module.exports = async () => {
  const categories = [];

  categories.push(
    {
      name: "Cactus & Succulents",
      image: "categories-succulent.jpg",
      description:
        "Cactus & succulent plants are a diverse group of water-storing, low-maintenance species, known for their unique and often striking shapes and textures.",
    },
    {
      name: "Hanging Plants",
      image: "Categories-Hanging.png",
      description:
        "Hanging plants are trailing or cascading varieties that add a touch of elegance and greenery to your space, perfect for suspended or elevated displays.",
    },
    {
      name: "Ficus",
      image: "categories-ficus.jpg",
      description:
        "Ficus plants are popular indoor trees and shrubs known for their glossy leaves and air-purifying qualities.",
    },
  );

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categories.");
};


