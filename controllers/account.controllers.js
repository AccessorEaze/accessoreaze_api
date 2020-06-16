const Account = require("../models/account.models");

exports.signup = (req, res) => {
    if (!req.params || !req.params.username || !req.params.email || !req.params.password) {
        return;
    }
    Account.signup(req.params.username, req.params.email, req.params.password, (err, data) => {
        if (err) {
            res.status(500).send({
                error: true,
                message: "Error signing up"
            });
        } else {
            res.send(data);
        }
    });
};

exports.login = (req, res) => {
    if (!req.params || !req.params.username || !req.params.password) {
        return;
    }
    Account.login(req.params.username, req.params.password, (err, data) => {
        if (err) {
            res.status(500).send({
                error: true,
                message: "Error logging in"
            });
        } else {
            res.send(data);
        }
    });
};