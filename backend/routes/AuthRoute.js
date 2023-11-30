const { Signup } = require("../controllers/AuthController");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to AlphaDevs' World." });
});

router.post("/signup", Signup);

module.exports = router;