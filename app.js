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

// Set up database connection
const db = mysql.createConnection({
    host: 'cubingdb2.mysql.database.azure.com', // Replace with your DB host, e.g., '127.0.0.1' or a remote server
    user: 'mysqladmin',      // Replace with your DB username
    password: 'Monzie1316!', // Replace with your DB password
    database: 'testdb', // Replace with your DB name
    ssl: {
        ca: '/path/to/DigiCertGlobalRootCA.crt.pem'
    }
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to the database.');
});

// Define a test route to query the database
app.get('/db-test', (req, res) => {
    const query = 'SELECT * FROM testdb.permtime';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Database query failed.');
        } else {
            res.send(`Database connection successful! First Row: ${results[0]}`);
        }
    });
});

// Define the Hello World route
/*app.get('/', (req, res) => {
    res.send('Hello World with My SQL Local DB V1!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
*/
