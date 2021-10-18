var express = require('express');
const router = express.Router();
const { reg } = require('./register');

router.post("/", (req, res) => {
    logemail = req.body.email;
    logpass = req.body.password;
    logarr = reg;
    res.send("post request login");
})

router.get("/", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var temp = false;
    for (var i = 0; i < logarr.length; i++) {
        if (logemail == logarr[i]["email"] && logpass == logarr[i]["password"]) {
            temp = true;
            break;
        }
    }
    if (temp == true)
        res.send("Success");
    else
        res.send("Failed");


});

module.exports = router;