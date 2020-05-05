var express = require('express');
var router = express.Router();

const classes = require("../controllers/accessories.controllers.js");

router.get('/search/:type/:model', classes.search);

module.exports = router;
