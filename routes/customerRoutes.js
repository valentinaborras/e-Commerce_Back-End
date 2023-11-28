const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

router.get("/customerOrders/:id", customerController.customerOrders);
router.get("/", customerController.index);
router.post("/", customerController.store);
router.get("/:id", customerController.show);
router.patch("/:id", customerController.update);
router.delete("/:id", customerController.destroy);

module.exports = router;
