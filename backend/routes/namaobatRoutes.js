const express = require("express");
const router = express.Router();
const NamaObatController = require("../controllers/namaobatController");

// Rute untuk mengambil semua data obat
router.get("/namaobat", NamaObatController.getAllNamaObat);

// Rute untuk menambahkan data obat
router.post("/namaobat", NamaObatController.addNamaObat);

module.exports = router;
