const express = require("express");
const router = express.Router();
const DataPasienController = require("../controllers/datapasienController");

// Rute untuk mengambil semua data pasien
router.get("/datapasien", DataPasienController.getAllDataPasien);

// Rute untuk menambahkan data pasien
router.post("/datapasien", DataPasienController.addDataPasien);

module.exports = router;
