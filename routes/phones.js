var express = require('express');
var router = express.Router();

const phones = require("../controllers/phones.controllers.js");

router.get('/list/:x/:y/:z', phones.list);

module.exports = router;
