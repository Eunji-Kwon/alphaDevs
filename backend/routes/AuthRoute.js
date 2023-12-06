const { Signup, Login, Logout } = require('../controllers/AuthController');
const router = require('express').Router();
const { userVerification } = require('../middlewares/AuthMiddleware');

router.get("/", (req, res) => {
  res.json({ message: "Welcome to The GlobalDevs' World." });
});

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/logout', Logout);

router.post('/', userVerification);

module.exports = router;