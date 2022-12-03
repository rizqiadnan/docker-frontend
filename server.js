const express = require('express');
const helmet = require('helmet');
const { Client } = require('pg');
const app = express();
const port = 8080;

// disable 'x-powered-by'
// app.disable("x-powered-by");

// use helmet
app.use(
    helmet({

        })
    );

// Connecting to Postgres database
// authentication values like 'root' and 'postgres' will defined in 'docker-compose.yml'
const client = new Client({
    password: "root",
    user: "root",
    host: "postgres",
});

// Serves a folder called 'public' and 'assets'
app.use(express.static("public"));
app.use(express.static("assets"));

// app.get('/', async (req, res) => {
//     res.setHeader("Content-Type", "text/html");
//     res.status(200);
//     res.send("<h1>Welcome To Express</h1>");
// });

// GET request to /employees
app.get("/employees", async (req, res) => {
    const results = await client
       .query("SELECT * FROM employees")
       .then((payload) => {
            return payload.rows;
        })
        .catch(() => {
            throw new Error("Query Failed!");
        });
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.send(JSON.stringify(results));
});

// Connect to the database before it starts
// using IIFE (Immediately Invoked Function Expression) async for the database connection to establish before listening
(async () => {
    await client.connect();

    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
})();

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
    
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//       }, 300);
//       reject("oops");
//     });
      
//     myPromise.then(() => {
//     console.log("hello");
// });