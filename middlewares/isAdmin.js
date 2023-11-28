const isAdmin = (req, res, next) => {
  console.log(req);
  if (req.auth.role !== "admin") {
    return res.status(403).json({ error: "You are not authorized..." });
  }
  next();
};

module.exports = isAdmin;
