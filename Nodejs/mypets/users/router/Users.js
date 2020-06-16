const {createUserController,userLoginController} = require("../controller/Users")
const router = require("express").Router();

router.post("/createUser",createUserController);
router.post("/login",userLoginController);

module.exports = router;