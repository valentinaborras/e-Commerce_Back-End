const express = require("express");
const router = express.Router();
const dataBaseController = require("../controllers/dataBaseController");

router.get("/", dataBaseController.resetDataBase);

module.exports = router;
