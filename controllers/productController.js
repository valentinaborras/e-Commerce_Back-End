const { Product } = require("../models");
const { Category } = require("../models");
const formidable = require("formidable");
const { Op } = require("sequelize");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");

async function index(req, res) {
  const whereCond = req.query;

  if (whereCond.trending) {
    whereCond.trending = Boolean(whereCond.trending);
  }
  if (whereCond.stock) {
    whereCond.stock = {
      [Op.gte]: 1,
    };
  }
  if (whereCond.categoryName) {
    try {
      const category = await Category.findOne({
        where: { name: whereCond.categoryName },
      });
      if (category) {
        whereCond.categoryId = category.id;
        delete whereCond.categoryName;
      } else {
        return res.status(404).json({ err: "Category not found" });
      }
    } catch (err) {
      return res.status(500).json({ err: "Error" });
    }
  }

  // if (req.query.minPrice !== undefined && req.query.maxPrice !== undefined) {
  //   whereCond.price = {
  //     [Op.gte]: parseFloat(req.query.minPrice),
  //     [Op.lte]: parseFloat(req.query.maxPrice),
  //   };
  //   delete whereCond.minPrice;
  //   delete whereCond.maxPrice;
  // }

  try {
    const products = await Product.findAll({
      where: whereCond,
      include: [{ model: Category }],
      order: [["name", "ASC"]],
    });
    return res.json(products);
  } catch (err) {
    return res.status(500).json({ err: "Error" });
  }
}

async function show(req, res) {
  try {
    const product = await Product.findOne({
      where: { slug: req.params.slug },
      include: [{ model: Category }],
    });
    return res.json(product);
  } catch (err) {
    return res.status(500).json({ err: "Error" });
  }
}

async function store(req, res) {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  try {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      let newFileName = null;
      if (files.image) {
        const ext = path.extname(files.image.filepath);
        newFileName = `image_${Date.now()}${ext}`;
        const { data, error } = await supabase.storage
          .from("img")
          .upload(newFileName, fs.createReadStream(files.image.filepath), {
            cacheControl: "3600",
            upsert: false,
            duplex: "half",
            contentType: files.image.mimetype,
          });
      }
      const product = await Product.create({
        productId: Number(fields.productId),
        name: fields.name,
        description: fields.description,
        image: newFileName !== null ? newFileName : "genericProduct.png",
        price: Number(fields.price),
        stock: Number(fields.stock),
        trending: Boolean(fields.trending),
        slug: fields.slug,
        categoryId: Number(fields.categoryId),
      });
      return res.json(product);
    });
  } catch (err) {
    return res.status(500).json({ err: "Error" });
  }
}

async function update(req, res) {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  try {
    const product = await Product.findOne({
      where: { slug: req.params.slug },
      include: [{ model: Category }],
    });
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      let newFileName = null;
      if (files.image) {
        const ext = path.extname(files.image.filepath);
        newFileName = `image_${Date.now()}${ext}`;
        const { data, error } = await supabase.storage
          .from("img")
          .upload(newFileName, fs.createReadStream(files.image.filepath), {
            cacheControl: "3600",
            upsert: false,
            duplex: "half",
            contentType: files.image.mimetype,
          });
      }
      const productNew = {
        ...product,
        name: fields.name,
        description: fields.description,
        image: newFileName !== null ? newFileName : product.image,
        price: Number(fields.price),
        stock: Number(fields.stock),
        trending: Boolean(fields.trending),
        slug: fields.slug,
        categoryId: Number(fields.categoryId),
      };
      product.update(productNew);
      return res.json(product);
    });
  } catch {
    return res.status(500).json({ err: "Error" });
  }
}

async function destroy(req, res) {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  const product = await Product.findOne({
    where: { slug: req.params.slug },
  });
  const imagePath = `${product.image}`;
  if (imagePath !== "genericProduct.png") {
    const { data, error } = await supabase.storage.from("img").remove([imagePath]);
  }
  await product.destroy();
  return res.json(product);
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
