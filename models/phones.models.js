const sql = require("./db.js");

// Constructor
const Phones = function (data) {
}

Phones.list = (result) => {
    var query = sql.query("SELECT * FROM `phones`;", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res);
            return;
        }
        result({kind: "not_found"}, null);
    });
};

module.exports = Phones;