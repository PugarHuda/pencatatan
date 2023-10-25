const express = require("express");
const router = express.Router();
const NamaApotikController = require("../controllers/namaapotikController");

// Rute untuk mengambil semua data apotik
router.get("/namaapotik", NamaApotikController.getAllNamaApotik);

// Rute untuk menambahkan data apotik
router.post("/namaapotik", NamaApotikController.addNamaApotik);

module.exports = router;
