const sql = require("./db.js");

// Constructor
const Accessory = function (data) {
    this.type = data.type;
    this.price = data.price;
    this.product = data.product;
    this.url = data.url;
    this.imageSmall = data.imageSmall;
    this.imageBig = data.imageBig;
    this.device = data.device;
    this.extra = data.extra;
}

Accessory.search = (type, device, result) => {
    if (!device) {
        device = "%";
    }
    var query = sql.query("SELECT * FROM `accessories` WHERE `type` LIKE " + sql.escape(type.toUpperCase()) + " AND `device` LIKE " + sql.escape("%" + device + "%") + ";", (err, res) => {
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

module.exports = Accessory;