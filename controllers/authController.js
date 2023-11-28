const { Customer, Admin } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mailer = require("../mailer");

async function customerTokens(req, res) {
  try {
    const user = await Customer.findOne({ where: { email: req.body.email } });
    if (!user) {
      console.log("No user found");
      return res.status(400).json({ error: "Wrong credentials..." });
    }

    const validatePassword = await bcrypt.compare(req.body.password, user.password);
    if (!validatePassword) {
      return res.status(400).json({ error: "Wrong credentials..." });
    }

    const token = jwt.sign(
      { sub: user.id, email: user.email, role: "customer" },
      process.env.JWT_SECRET,
    );

    res.json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error..." });
  }
}

async function adminTokens(req, res) {
  try {
    const adminUser = await Admin.findOne({ where: { email: req.body.email } });

    if (!adminUser) {
      return res.status(400).json({ error: "Wrong credentials..." });
    }

    const validatePassword = await bcrypt.compare(req.body.password, adminUser.password);
    if (!validatePassword) {
      return res.status(400).json({ error: "Wrong credentials..." });
    }

    const token = jwt.sign(
      { sub: adminUser.id, email: adminUser.email, role: "admin" },
      process.env.JWT_SECRET,
    );

    res.json({ token, adminUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error..." });
  }
}

async function forgotPassword(req, res) {
  const { email } = req.body;
  console.log(req.body);
  const user = await Customer.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ error: "No user found with this email address" });
  }
  const resetToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  //const resetLink = `https://seedling-shop.vercel.app/resetpassword?token=${resetToken}`;
  const resetLink = `http://localhost:5173/resetpassword?token=${resetToken}`;
  mailer.sendMail(
    {
      from: "lia_439@hotmail.com",
      to: email,
      subject: "Seedling - Password Reset",
      html: `<h2>Hello, ${user.firstname} ${user.lastname}</h2>
      <p>Click the following link to reset your password: </p>
      <a href="${resetLink}">${resetLink}</a>`,
    },

    (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Failed to send email." });
      } else {
        console.log("Email sent");
        return res.status(200).json({ message: "Password reset link sent to email" });
      }
    },
  );
}

async function resetPassword(req, res) {
  const { token, newPassword } = req.body;
  console.log(req.body);
  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }

  const user = await Customer.findByPk(decoded.id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();
  return res.status(200).json({ message: "Password successfully reset." });
}

async function forgotPasswordAdmin(req, res) {
  const { email } = req.body;
  console.log(req.body);
  const user = await Admin.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ error: "No user found with this email address" });
  }
  const resetToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  //const resetLink = `https://seedling-admin.vercel.app/resetpassword?token=${resetToken}`;
  const resetLink = `http://localhost:5174/resetpassword?token=${resetToken}`;
  mailer.sendMail(
    {
      from: "lia_439@hotmail.com",
      to: email,
      subject: "Seedling - Password Reset",
      html: `<h2>Hello, ${user.firstname} ${user.lastname}</h2>
      <p>Click the following link to reset your password: </p>
      <a href="${resetLink}">${resetLink}</a>`,
    },

    (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Failed to send email." });
      } else {
        console.log("Email sent");
        return res.status(200).json({ message: "Password reset link sent to email" });
      }
    },
  );
}

async function resetPasswordAdmin(req, res) {
  const { token, newPassword } = req.body;
  console.log(req.body);
  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
  console.log(decoded);

  const user = await Admin.findByPk(decoded.id);
  console.log(decoded.id);
  console.log(user);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();
  return res.status(200).json({ message: "Password successfully reset." });
}

module.exports = {
  customerTokens,
  adminTokens,
  forgotPassword,
  resetPassword,
  forgotPasswordAdmin,
  resetPasswordAdmin,
};
