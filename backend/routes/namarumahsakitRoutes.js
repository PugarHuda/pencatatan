const express = require("express");
const router = express.Router();
const NamaRumahSakitController = require("../controllers/namarumahsakitController");

// Rute untuk mengambil semua data nama rumah sakit
router.get("/namarumahsakit", NamaRumahSakitController.getAllNamaRumahSakit);

// Rute untuk menambahkan data nama rumah sakit
router.post("/namarumahsakit", NamaRumahSakitController.addNamaRumahSakit);

module.exports = router;
