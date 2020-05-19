const Phones = require("../models/phones.models");

exports.list = (req, res) => {
    Phones.list((err, data) => {
        if (err) {
            res.status(500).send({
                error: true,
                message: "Error retrieving Phones"
            });
        } else {
            res.send(data);
        }
    });
};

exports.search = (req, res) => {
    if (!req.params || !req.params.model) {
        return;
    }
    Phones.modelSearch(req.params.model, (err, data) => {
        if (err) {
            res.status(500).send({
                error: true,
                message: "Error retrieving Phones"
            });
        } else {
            res.send(data);
        }
    });
};