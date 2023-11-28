const { Admin } = require("../models");
const formidable = require("formidable");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");
const { log } = require("console");
const fs = require("fs");
const bcrypt = require("bcryptjs");

async function index(req, res) {
  try {
    const admins = await Admin.findAll();
    return res.json(admins);
  } catch (err) {
    return res.status(500).json({ err: "Error" });
  }
}

async function show(req, res) {
  try {
    const admin = await Admin.findOne({
      where: { id: req.params.id },
    });
    return res.json(admin);
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
      const admin = await Admin.create({
        firstname: fields.firstname,
        lastname: fields.lastname,
        email: fields.email,
        password: encryptedPassword,
        avatar: newFileName != null ? newFileName : "genericAvatar.png",
      });
      return res.json(admin);
    });
  } catch (err) {
    return res.status(500).json({ err: "Error" });
  }
}

async function update(req, res) {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  try {
    const admin = await Admin.findOne({ where: { id: req.params.id } });
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });
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
      const adminNew = {
        firstname: fields.firstname,
        lastname: fields.lastname,
        email: fields.email,
        password: fields.password,
        avatar: newFileName != null ? newFileName : admin.avatar,
      };
      admin.update(adminNew);
      return res.json(admin);
    });
  } catch {
    return res.status(500).json({ err: "Error" });
  }
}

async function destroy(req, res) {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  try {
    const admin = await Admin.findOne({ where: { id: req.params.id } });

    const imagePath = `${admin.avatar}`;
    if (imagePath !== "genericAvatar.png") {
      const { data, error } = await supabase.storage.from("img").remove([imagePath]);
    }
    await admin.destroy();
    return res.json(admin);
  } catch {
    return res.status(500).json({ err: "Error" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
