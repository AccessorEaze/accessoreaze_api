var express = require('express');
var router = express.Router();

const phones = require("../controllers/phones.controllers.js");

router.get('/model/list', phones.list);
router.get('/model/search/:model', phones.search);

module.exports = router;
