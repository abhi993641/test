var express = require('express');
var app = express();
const login = require('./login.js');
const { register } = require('./register.js');
const { reg } = require('./register.js');
const blogs = require('./blogs.js');

app.use(express.json())

app.use('/register', register);
app.use('/login', login);
app.use('/blogs', blogs);

app.listen(8000);
