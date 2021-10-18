var express = require('express');
var app = express();
const router = express.Router();
const reg = new Array();
var data;
router.post("/", (req, res) => {
    data = req.body;

    regemail = req.body.email;
    regpass = req.body.password;
    logarr = reg;
    var temp = false;
    for (var i = 0; i < reg.length; i++) {
        if (regemail == reg[i]["email"]) {
            temp = true;
            break;
        }
    }
    if (temp == true)
        res.send("Error:Record already exists");
    else {
        reg.push(data);
        res.send(reg);
    }

    res.send("post request register");
});

router.get("/", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(reg);
    console.log(reg);

});

module.exports = { "register": router, reg };