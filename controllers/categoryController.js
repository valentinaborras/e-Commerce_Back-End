const { Category, Product } = require("../models");
const formidable = require("formidable");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");
const { log } = require("console");
const fs = require("fs");

async function index(req, res) {
  try {
    const categories = await Category.findAll();
    return res.json(categories);
  } catch (err) {
    return res.status(500).json({ err: "Error" });
  }
}

async function show(req, res) {
  try {
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
    return res.json(category);
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
      const category = await Category.create({
        name: fields.name,
        description: fields.description,
        image: newFileName != null ? newFileName : "genericCategory.png",
      });

      return res.json(category);
    });
  } catch {
    return res.status(500).json({ err: "Error" });
  }
}

async function update(req, res) {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  try {
    const category = await Category.findOne({ where: { id: req.params.id } });
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
      const categoryNew = {
        name: fields.name,
        description: fields.description,
        image: newFileName != null ? newFileName : category.image,
      };
      category.update(categoryNew);
      return res.json(category);
    });
  } catch {
    return res.status(500).json({ err: "Error" });
  }
}

async function destroy(req, res) {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  const category = await Category.findOne({ where: { id: req.params.id } });

  const imagePath = `${category.image}`;

  if (imagePath !== "genericCategory.png") {
    const { data, error } = await supabase.storage.from("img").remove([imagePath]);
  }
  await category.destroy();
  return res.json(category);
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
