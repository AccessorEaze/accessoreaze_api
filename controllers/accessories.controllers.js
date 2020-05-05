const Accessory = require("../models/accessory.models");

exports.search = (req, res) => {
    if (!req.params || !req.params.type || !req.params.model) {
        res.send({});
        return;
    }
    Accessory.search(req.params.type, req.params.model, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    error: true,
                    message: `Not found Accessories with device ${req.params.model}.`
                });
            } else {
                res.status(500).send({
                    error: true,
                    message: "Error retrieving Accessories with device " + req.params.model
                });
            }
        } else {
            res.send(data);
        }
    });
};