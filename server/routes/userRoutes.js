const express = require("express");
const {
    registerController,
    loginController,
    singleUser,
    getAllUser,
    userUpdate,
    deleteUser,
    resetpassword,
    sendUserPasswordResetEmail,
    saveUserForgotPassword,
} = require("../controllers/userController");
const authorisation = require("../middlewares/authenticate.middleware");
const userRoute = express.Router();

userRoute.get("/", getAllUser);
userRoute.post("/register", registerController);
userRoute.post("/login", loginController);
userRoute.get("/:id", singleUser);
userRoute.delete("/delete/:id", deleteUser);
userRoute.post("/resetpassword", authorisation, resetpassword);
userRoute.post("/forgotpassword", sendUserPasswordResetEmail);
userRoute.post("/saveforgotpassword/:id/:token", saveUserForgotPassword);


module.exports = userRoute;
