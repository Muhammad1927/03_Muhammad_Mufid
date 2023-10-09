// app.js

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000; // Port yang akan digunakan

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Objek untuk menyimpan data absensi
const absensiData = [];

// Handler untuk mengelola absensi
app.post("/absen", (req, res) => {
  const { id } = req.body;

  // Validasi ID
  if (id.length !== 5) {
    return res.status(400).json({ error: "ID harus terdiri dari 5 karakter" });
  }

  // Tambahkan data absensi ke dalam memori
  const absensi = {
    id,
    tanggalInput: new Date(),
  };
  absensiData.push(absensi);

  res.status(200).json({ message: "Absen berhasil" });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
