var express = require('express');
var router = express.Router();

const classes = require("../controllers/accessories.controllers.js");

router.get('/search/:type/', classes.search);
router.get('/search/:type/:device', classes.search);

module.exports = router;
