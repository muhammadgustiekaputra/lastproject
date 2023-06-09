const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware untuk parsing data dari request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint untuk form login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Lakukan proses verifikasi data login, misalnya dengan mengakses database
});

// Jalankan server pada port tertentu
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
