const express = require("express");
const router = express.Router();

// Impor semua rute yang Anda buat
const dataadminRoutes = require("./dataadminRoutes");
const datapasienRoutes = require("./datapasienRoutes");
const namaapotikRoutes = require("./namaapotikRoutes");
const namaobatRoutes = require("./namaobatRoutes");
const namapenyakitRoutes = require("./namapenyakitRoutes");
const namarumahsakitRoutes = require("./namarumahsakitRoutes");

// Gunakan rute-rute yang telah diimpor
router.use("/dataadmin", dataadminRoutes);
router.use("/datapasien", datapasienRoutes);
router.use("/namaapotik", namaapotikRoutes);
router.use("/namaobat", namaobatRoutes);
router.use("/namapenyakit", namapenyakitRoutes);
router.use("/namarumahsakit", namarumahsakitRoutes);

module.exports = router;
