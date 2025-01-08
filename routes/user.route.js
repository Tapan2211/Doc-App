const express = require("express");
const {
    loginController,
    registerController,
    authController,
    applyDoctorController,
    getAllNotificationController,
    deleteAllNotificationController,
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

//Notifiaction  Doctor || POST
router.post(
    "/get-all-notification",
    authMiddleware,
    getAllNotificationController
);
//Notifiaction  Doctor || POST
router.post(
    "/delete-all-notification",
    authMiddleware,
    deleteAllNotificationController
);
module.exports = router;
