const sql = require("./db.js");
const bcrypt = require('bcrypt');

// Constructor
const Account = function (data) {
}


// id, username, email, password
Account.signup = (username, email, password, result) => {
    var query = sql.query("SELECT * FROM `accounts` WHERE LOWER(`username`) = LOWER(" + sql.escape(username) + ") OR LOWER(`email`) = LOWER(" + sql.escape(email) + ");", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            result("Username or Email already exists", null);
            return;
        }
        let salt = bcrypt.genSaltSync(10);
        let passwordHash = bcrypt.hashSync(password, salt);
        sql.query("INSERT INTO `accounts` (`username`, `email`, `password`) VALUES (" + sql.escape(username) + "," + sql.escape(email) + "," + sql.escape(passwordHash) + ");", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, {"success": true});
        });
    });
};

Account.login = (username, password, result) => {
   attemptLogin(username, password, result);
};

Account.addItem = (username, password, type, data, result) => {
    attemptLogin(username, password, (err, data)=>{
        if(err){
            result(err, null);
            return;
        }
        // successful login
    });
};

function attemptLogin(username, password, result){
    sql.query("SELECT * FROM `accounts` WHERE LOWER(`username`) = LOWER(" + sql.escape(username) + ");", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            let hash = res[0].password;
            if(!bcrypt.compareSync(password, hash)){
                result("Wrong password", null);
                return;
            }
            result(null, {"success": true})
            return;
        }
        result({kind: "not_found"}, null);
    });
}

module.exports = Account;