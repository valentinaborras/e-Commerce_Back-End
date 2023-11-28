const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "Parodia Cactus - Bunch",
      description:
        "This stunning bunch is a perfect easy care cacti that thrives indoors or outdoors. With it's classic cactus look, it brings the desert vibes to any space! Careful though, the soft spines can be a bit deceiving! They seem nice at first but will poke you at the right angle.",
      image: "Parodia-Cactus-Bunch.png",
      price: 15,
      stock: 150,
      trending: false,
      slug: "parodia-cactus-bunch",
      categoryId: 1,
    },
    {
      name: "Parodia Cactus",
      description:
        "The Parodia Cactus is a delightful and visually appealing succulent plant. With its spherical shape and vibrant green coloration, this cactus adds a touch of whimsy to any garden or indoor plant collection. It features clusters of spines and charming yellow flowers when in bloom. Easy to care for, the Parodia Cactus thrives in well-draining soil and plenty of sunlight, making it a perfect choice for both novice and experienced plant enthusiasts.",
      image: "Parodia-Cactus.png",
      price: 19,
      stock: 150,
      trending: false,
      slug: "parodia-cactus",
      categoryId: 1,
    },
    {
      name: "Medium Cactus Assorted",
      description:
        "This is a random medium sized cactus, our greenhouse team will pick the best looking cactus currently in stock.",
      image: "Medium-Cactus-Assorted.png",
      price: 20,
      stock: 150,
      trending: false,
      slug: "medium-cactus-assorted",
      categoryId: 1,
    },
    {
      name: "Golden Barrel Cactus",
      description:
        "The Golden Barrel Cactus  is a stunning and iconic succulent native to Mexico. Its distinctive spherical shape, ribbed texture, and golden-yellow spines make it a standout addition to arid gardens and xeriscape landscapes. This slow-growing cactus can eventually reach impressive sizes, making it a striking focal point. It's well-suited to sunny, well-drained locations and requires minimal maintenance, making it a favorite choice for those seeking low-maintenance yet visually captivating desert plants.",
      image: "Golden-Barrel-Cactus.png",
      price: 15,
      stock: 150,
      trending: true,
      slug: "golden-barrel-cactus",
      categoryId: 1,
    },
    {
      name: "Blooming Kalanchoe",
      description:
        "Your new favorite colorful succulent! An easy-to-grow, long-blooming succulent, Kalanchoes are a mainstay of just about any low-care space that wants a splash of color! They love bright, natural light without much direct sun. Since it's actually a succulent, their fat, fleshy leaves don't want to be watered all the time. Instead, they prefer less frequent waterings (and a little more when they're flowering).",
      image: "Blooming-Kalanchoe.png",
      price: 22,
      stock: 150,
      trending: false,
      slug: "blooming-kalanchoe",
      categoryId: 1,
    },
    {
      name: "Echeveria Rose Succulent",
      description:
        "Echeverias are lovely succulents that are both low maintenance and gorgeous. Their beautiful rosette-like patterns, wide range of colors, and stunning flowers make them one of the most beloved succulents out there - perfect for any Green Space!",
      image: "Echeveria-Rose-Succulent.png",
      price: 11,
      stock: 150,
      trending: false,
      slug: "echeveria-rose-succulent",
      categoryId: 1,
    },
    {
      name: "Ox Tongue Succulent",
      description:
        "This small but mighty succulent will sure be sure to catch your eye! One of the easiest succulents to grow indoors, the Ox Tongue Succulent can tolerate a range of light conditions and while keeping it's unique colors.",
      image: "Ox-Tongue-Succulent.png",
      price: 15,
      stock: 150,
      trending: true,
      slug: "ox-tongue-succulent",
      categoryId: 1,
    },
    {
      name: "Zebra Haworthia Succulent",
      description:
        "The Zebra Haworthia Succulent is a striking and low-maintenance succulent plant that boasts distinctive zebra-like stripes on its fleshy leaves. These striking white bands contrast beautifully against the deep green foliage, giving the plant its name. Zebra Haworthia is a popular choice for indoor gardens, as it thrives in well-drained soil and moderate sunlight. Its compact size and unique appearance make it an excellent addition to succulent collections and small spaces, adding a touch of natural elegance to any room.",
      image: "Zebra-Haworthia-Succulent.png",
      price: 17,
      stock: 150,
      trending: false,
      slug: "zebra-haworthia-succulent",
      categoryId: 1,
    },
    {
      name: "Panda Plant",
      description:
        "The Panda Plant  is a charming and unique succulent known for its fuzzy, silvery-green leaves with dark brown spots on the edges, resembling the appearance of a panda's fur. This low-maintenance succulent is an excellent choice for indoor gardening. Panda Plants thrive in well-draining soil and prefer bright, indirect sunlight. With its distinctive appearance and ease of care, the Panda Plant is a favorite among succulent enthusiasts, adding a touch of whimsy and texture to any plant collection.",
      image: "Panda-Plant.png",
      price: 15,
      stock: 150,
      trending: false,
      slug: "panda-plant",
      categoryId: 1,
    },
    {
      name: "Variegated Spider Plant Reverse",
      description:
        "Spider Plants bring character and color to indoor spaces, and thanks to our faux take on Chlorophytum comosum, you can keep yours looking fresh without having plant-care experience. Pair it with the ceramic planter of your choice.",
      image: "Variegated-Spider-Plant-Reverse.png",
      price: 10,
      stock: 150,
      trending: false,
      slug: "variegated-spider-plant-reverse",
      categoryId: 2,
    },
    {
      name: "English Ivy Green Ideal",
      description:
        "English Ivy Green (Hedera helix) is an evergreen perennial that thrives in indirect light. This plant grows quickly and can be trained to trail over walls and surfaces — or cut it back if a trim and tidy plant is more your style (cuttings are easily propagated!).",
      image: "English-Ivy-Green-Ideal.png",
      price: 25,
      stock: 150,
      trending: false,
      slug: "english-ivy-green-ideal",
      categoryId: 2,
    },
    {
      name: "Boston Fern",
      description:
        "The iconic Boston Fern is perfect for an outdoor porch during the warmer months or grown year-round indoors. This Fern is tolerant of low light and appreciative of high humidity. It is also considered pet-friendly or non-toxic, making it safe to keep around curious four-legged friends.",
      image: "Boston-Fern.png",
      price: 25,
      stock: 150,
      trending: false,
      slug: "boston-fern",
      categoryId: 2,
    },
    {
      name: "Philodendron Green Cordatum",
      description:
        "The iconic Boston Fern is perfect for an outdoor porch during the warmer months or grown year-round indoors. This Fern is tolerant of low light and appreciative of high humidity. It is also considered pet-friendly or non-toxic, making it safe to keep around curious four-legged friends.",
      image: "Philodendron-Green-Cordatum.png",
      price: 30,
      stock: 150,
      trending: false,
      slug: "philodendron-green-cordatum",
      categoryId: 2,
    },
    {
      name: "String of Pearls",
      description:
        "A smaller variety of Senecio rowleyanus is known as (String of Pearls Mini) or (String of Pearls Dwarf.) Unlike the standard plant, this variant has shorter stems and miniature leaves, making it perfect for smaller spaces or for those who prefer a more compact size. Despite its smaller size, it retains the charming appearance of hanging pearls and remains an easy-to-care-for plant that requires bright but indirect light and moderate watering. The miniature variety of the String of Pearls plant is equally attractive and adds a touch of elegance and uniqueness to interior decor.",
      image: "String-of-Pearls.png",
      price: 10,
      stock: 150,
      trending: true,
      slug: "string-of-pearls",
      categoryId: 2,
    },
    {
      name: "Burgundy Rubber Tree",
      description:
        "The Burgundy Rubber Tree is easy for beginners and a great starter plant! They can quickly grow up to 8' inside and do best in bright to moderate indirect light.In general these plants leave our nursery when they are 16' to 28' tall (depending on the size). They are living plants and actual size may vary depending on the current crop.",
      image: "Burgundy-Rubber-Tree.png",
      price: 38,
      stock: 150,
      trending: true,
      slug: "burgundy-rubber-tree",
      categoryId: 3,
    },
    {
      name: "Fiddle Leaf Fig",
      description:
        "Fiddle Leaf Figs, (Ficus Lyrata), are gorgeous plants known for their large leaves and vibrant green colors.   With their big broad leaves, the fiddle leaf fig is definitely one of the most iconic house plants out there. They are also one of the most popular and has become one of the biggest home decor trends in all houseplant history.  They are a little high maintenance - preferring a more stable environment without much change.",
      image: "Fiddle-Leaf-Fig.png",
      price: 18,
      stock: 150,
      trending: false,
      slug: "fiddle-leaf-fig",
      categoryId: 3,
    },
    {
      name: "Ruby Rubber Tree",
      description:
        "The Ruby Rubber Tree is easy for beginners and a great starter plant! They can quickly grow up to 8' inside and do best in bright to moderate indirect light.",
      image: "Ruby-Rubber-Tree.png",
      price: 70,
      stock: 150,
      trending: true,
      slug: "ruby-rubber-tree",
      categoryId: 3,
    },
    {
      name: "Ficus elastica Tineke",
      description:
        "The Too Beautiful Ficus Tineke Rubber Tree is easy for beginners and a great starter plant! They can quickly grow up to 10' inside and do best in bright to moderate indirect light.  This rubber plant variety is considered 'new' and their high degree of color and variation is somewhat rare.",
      image: "Ficus-elastica-Tineke.png",
      price: 75,
      stock: 150,
      trending: true,
      slug: "ficus-tineke",
      categoryId: 3,
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};


