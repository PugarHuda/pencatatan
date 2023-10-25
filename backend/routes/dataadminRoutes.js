const express = require("express");
const router = express.Router();
const DataAdminController = require("../controllers/dataadminController");

// Rute untuk mengambil semua data admin
router.get("/dataadmin", DataAdminController.getAllDataAdmin);

// Rute untuk menambahkan data admin
router.post("/dataadmin", DataAdminController.addDataAdmin);

module.exports = router;
