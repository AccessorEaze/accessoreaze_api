var express = require('express');
var router = express.Router();

const account = require("../controllers/account.controllers.js");

router.get('/signup/:username/:email/:password', account.signup);
router.get('/login/:username/:password', account.login);
router.get('/list/add/:username/:password/:type/:data', account.login);

module.exports = router;
