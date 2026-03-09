const { Router } = require("express");
const {
  registerUserController,
  loginUserController,
  getMeController,
  logoutUserController,
} = require("../controllers/auth.controller");
const { authUser } = require("../middlewares/auth.middlware");

const router = Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/get-me", authUser, getMeController);
router.get("/logout", logoutUserController)

module.exports = router;
