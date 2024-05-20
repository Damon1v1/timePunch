const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const port = 3001;
require('dotenv').config();

// Middleware
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'calo_it',
    port: 3306,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// API endpoint to handle POST request
app.post('/addUser', (req, res) => {
    const { empName } = req.body;
  
    const sql = 'INSERT INTO employees (name) VALUES (?)';
    connection.query(sql, [empName], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Error inserting user');
            return;
        }
        console.log('User inserted successfully');
        res.send('User inserted successfully');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});