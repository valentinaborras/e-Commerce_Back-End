const { Customer } = require("../models");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const bcrypt = require("bcryptjs");
const { createClient } = require("@supabase/supabase-js");
const { log } = require("console");

async function index(req, res) {
  try {
    const customers = await Customer.findAll();
    return res.json(customers);
  } catch (err) {
    return res.status(500).json({ err: "Error" });
  }
}

async function show(req, res) {
  try {
    const customer = await Customer.findOne({
      where: { id: req.params.id },
      include: "orders",
    });
    return res.json(customer);
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
      const encryptedPassword = await bcrypt.hash(fields.password, 10);

      const ext = path.extname(files.avatar.filepath);
      const newFileName = `image_${Date.now()}${ext}`;
      const { data, error } = await supabase.storage
        .from("img")
        .upload(newFileName, fs.createReadStream(files.avatar.filepath), {
          cacheControl: "3600",
          upsert: false,
          duplex: "half",
          contentType: files.avatar.mimetype,
        });

      const customer = await Customer.create({
        firstname: fields.firstname,
        lastname: fields.lastname,
        email: fields.email,
        password: encryptedPassword,
        avatar: newFileName,
      });

      return res.json(customer);
    });
  } catch (err) {
    return res.status(500).json({ err: "Error" });
  }
}

async function update(req, res) {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

  try {
    const customer = await Customer.findOne({ where: { id: req.params.id } });
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });
    try {
      form.parse(req, async (err, fields, files) => {
        let newFileName = null;
        if (files.avatar) {
          const ext = path.extname(files.avatar.filepath);
          newFileName = `image_${Date.now()}${ext}`;
          const { data, error } = await supabase.storage
            .from("img")
            .upload(newFileName, fs.createReadStream(files.avatar.filepath), {
              cacheControl: "3600",
              upsert: false,
              duplex: "half",
              contentType: files.avatar.mimetype,
            });
        }
        const customerUpdate = {
          ...customer,
          firstname: fields.firstname,
          lastname: fields.lastname,
          email: fields.email,
          avatar: newFileName != null ? newFileName : customer.avatar,
          country: fields.country,
          city: fields.city,
          address: fields.address,
          zipcode: fields.zip,
          phone: fields.phone,
        };

        customer.update(customerUpdate);
        return res.json(customer);
      });
    } catch (error) {
      console.log(error);
      console.log("Error updating customer");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: "Error" });
  }
}

async function destroy(req, res) {
  const customer = await Customer.findByPk(req.params.id);
  await customer.destroy();
  return res.json(customer);
}

async function customerOrders(req, res) {
  try {
    const customer = await Customer.findOne({
      where: { id: req.params.id },
      include: "orders",
    });
    return res.json(customer);
  } catch (err) {
    return res.status(500).json({ err: "Error" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  customerOrders,
};
