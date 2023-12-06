const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
    // console.log("in middleware");
    const token = req.cookies.token;
    // console.log(req.cookies);
    if (!!!token) {
        // console.log("!!!Token : ");
        return res.json({ status: false });
    }
    jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
        // console.log("in Verifying Token");
        // console.log("Key : "+process.env.JWT_SECRET);
        if (err) {
            console.error('Verification error: ', err.message);
            return res.json({ status: false, error: err.message });
        } else {
            const user = await User.findById(data.id);
            if (user) return res.json({ status: true, user: user.email });
            else return res.json({ status: false });
        }
    });
};