const { Signup, Login, Logout, GetUser } = require('../controllers/AuthController');
const router = require('express').Router();
// const { userVerification } = require('../middlewares/AuthMiddleware');

router.get("/", (req, res) => {
  res.json({ message: "Welcome to The GlobalDevs' World." });
});

// router.post('/signup', Signup);
// router.post('/login', Login);
// router.post('/logout', Logout);

router.post('/api/signup', Signup);
router.post('/api/login', Login);
router.post('/api/logout', Logout);
// router.use(userVerification);

router.get('/user', GetUser);

module.exports = router;