const express = require("express");
const router = express.Router();
const NamaPenyakitController = require("../controllers/namapenyakitController");

// Rute untuk mengambil semua data penyakit
router.get("/namapenyakit", NamaPenyakitController.getAllNamaPenyakit);

// Rute untuk menambahkan data penyakit
router.post("/namapenyakit", NamaPenyakitController.addNamaPenyakit);

module.exports = router;
