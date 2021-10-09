//create a server

const http = require('http');
const fs = require('fs');
const ls = require('lodash');

const server = http.createServer((req, res) => {

    console.log(req.url, req.method);


    const num = ls.random(0, 20);
    console.log(num);

    //this runs only once
    const greet = ls.once(() => {
        console.log('hi');
    });

    greet();
    greet();


    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-u':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //send an html file
    fs.readFile(path, (err, data) => {

        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end(data);
        }
    });

    //  res.end();
});

//listen 
server.listen(3001, 'localhost', () => {
    console.log('listening for requests on port 3001');
});

