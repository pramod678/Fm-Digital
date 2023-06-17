const express = require('express')
const router = express();
const {register, login,userData,forgotpassword,resetpassword,resetpassword2,getAllUser,deleteUser,uploadimage,getimage,paginatedUsers} = require("./users.Controller");

router.post("/register", register);
router.post("/login", login);
router.post("/userData", userData);
router.post("/forgotpassword", forgotpassword);
router.post("/resetpassword/:id/:token", resetpassword);
router.post("/resetpassword2/:id/:token", resetpassword2);
router.post("/getAllUser", getAllUser);
router.post("/deleteUser", deleteUser);
router.post("/uploadimage", uploadimage);
router.post("/getimage", getimage);
router.post("/paginatedUsers", paginatedUsers);

module.exports = router;