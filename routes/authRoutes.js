const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/admin", authController.adminTokens);
router.post("/forgotpassword", authController.forgotPassword);
router.post("/resetpassword", authController.resetPassword);
router.post("/forgotpasswordadmin", authController.forgotPasswordAdmin);
router.post("/resetpasswordadmin", authController.resetPasswordAdmin);
router.post("/", authController.customerTokens);

module.exports = router;
