const express = require('express');
const app = express();
const port = 8080;

app.get('/', async (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200);
    res.send("<h1>Welcome To Express</h1>");
});

// Create Promise will return error on node > v15 :)
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello World');
//     }, 300);
//     reject('Timeout');
// });

// promise.then(() => {
//     console.log('this will never run!');
// });

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});