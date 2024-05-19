const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); // or mysql2

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
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