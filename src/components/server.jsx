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
  // Jika data login valid, kirimkan respon dengan status 200 OK
  // Jika data login tidak valid, kirimkan respon dengan status 401 Unauthorized
});

// Jalankan server pada port tertentu
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
