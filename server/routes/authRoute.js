const { register, login, getUser } = require("../controllers/authController");
const auth = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/signup", register);
router.post("/login", login);
router.get("/getUser", auth, getUser);

module.exports = router;
