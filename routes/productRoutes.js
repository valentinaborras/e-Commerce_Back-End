const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const checkJwt = require("../middlewares/checkJwt");
const isAdmin = require("../middlewares/isAdmin");

router.get("/", productController.index);
router.post("/", productController.store);
router.get("/:slug", productController.show);
router.patch("/:slug", productController.update);
router.delete("/:slug", productController.destroy);

module.exports = router;
