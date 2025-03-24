//const express = require('express');
//const app = express();

//app.get('/', (req, res) => {
//    res.send('Hello Cubing World v1 with database!');
//});

//const PORT = process.env.PORT || 8080;
//app.listen(PORT, () => {
//    console.log(`Server is running on http://localhost:${PORT}`);
//});

const express = require('express');
const mysql = require('mysql2');
const app = express();
/*
var fs = require('fs');
const path = require("path");


const CUBINGAPP = process.env.PWD;
*/

// Set up database connection
const db = mysql.createConnection({
    host: 'cubingdb2.mysql.database.azure.com', // Replace with your DB host, e.g., '127.0.0.1' or a remote server
    port: 3306,
    user: 'mysqladmin',      // Replace with your DB username
    password: 'Monzie1316!', // Replace with your DB password
    database: 'testdb', // Replace with your DB name
    //ssl: {
    //    ca: '/path/to/DigiCertGlobalRootCA.crt'
    //}
});


// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to the database.');
});

console.log('Before Trying DB query');
// Define a test route to query the database
app.get('/db-test', (req, res) => {
    console.log('Trying DB query');
    const query = 'SELECT * FROM testdb.permtime';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Database query failed.');
        } else {
            console.log('Print row by row');
            res.send(`Print row by row`);
            results.forEach((row, index) => {
                console.log('Iterate row by row');
                console.log(`Row ${index + 1}:`, row);
                res.send(`Row: ${row}`);
            });
        }
    });
    db.end((err) => {
        if (err) {
            console.error('Error closing the database connection:', err);
        } else {
            console.log('Database connection closed.');
        }
    });
});


console.log('Before Hellow World');
// Define the Hello World route
app.get('/', (req, res) => {
    res.send('Hello World with My SQL Local DB V1!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

