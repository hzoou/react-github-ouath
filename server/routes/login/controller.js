const passport = require('../../middlewares/passport');
const jwt = require('jsonwebtoken');

const loginByGithub = (req, res, next) => {
    passport.authenticate('github')(req, res, next);
};

const getGithubProfile = (req, res, next) => {
    passport.authenticate('github', { failureRedirect: '/login' })(req, res, next);
};

const publishToken = (req, res) => {
    const payload = { username: req.user.username };
    const expiresIn = { expiresIn: '7d' };
    const token = jwt.sign(payload, process.env.JWT_SECRET, expiresIn);
    res.cookie("jwt", token).redirect('http://localhost:3000');
};

module.exports = {
    loginByGithub,
    getGithubProfile,
    publishToken
};