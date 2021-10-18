const blogs = new Array();
var express = require('express');
const router = express.Router();


router.post("/", (req, res) => {
    title = req.body.title;
    description = req.body.description;
    data = {
        "title": title,
        "description": description,
        "author": logemail
    }
    blogs.push(data);

    res.send("post request blogs");
})

router.get("/", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(blogs);

});

module.exports = router;