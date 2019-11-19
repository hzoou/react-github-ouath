const express = require('express');
const router = express.Router();

const { loginByGithub, getGithubProfile, publishToken } = require('./controller');

router.get('/', loginByGithub);
router.get('/complete', getGithubProfile, publishToken);

module.exports = router;