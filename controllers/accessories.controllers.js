const Accessory = require("../models/accessory.models");

exports.search = (req, res) => {
    if (!req.params || !req.params.type) {
        return;
    }
    var device = req.params.device;
    if(!device){
        
    }
    Accessory.search(req.params.type, req.params.device, (err, data) => {
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