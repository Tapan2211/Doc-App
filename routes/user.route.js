const express = require("express");
const {
    loginController,
    registerController,
    authController,
    applyDoctorController
} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);
module.exports = router;

//APply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);
module.exports = router;
