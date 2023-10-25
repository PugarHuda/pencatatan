const express = require("express");
const app = express();
const port = 1000; // Port server

// Middleware untuk parsing JSON dari permintaan
app.use(express.json());

// Impor koneksi database Sequelize
const sequelize = require("./config/database");

// Sinkronisasi model-model Sequelize dengan database
sequelize
  .sync()
  .then(() => {
    console.log("Koneksi database berhasil");
  })
  .catch((error) => {
    console.error("Koneksi database gagal: ", error);
  });

// Impor berkas rute utama (index.js)
const routes = require("./routes/index");

// Gunakan rute utama
app.use("/api", routes);

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
