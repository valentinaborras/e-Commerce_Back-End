const { expressjwt: checkJwt } = require("express-jwt");

module.exports = checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] });
