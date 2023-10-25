const { NamaRumahSakit } = require("../models"); // Impor model Sequelize NamaRumahSakit

// Mengambil semua data nama rumah sakit
async function getAllNamaRumahSakit(req, res) {
  try {
    const namaRumahSakit = await NamaRumahSakit.findAll();
    return res.status(200).json(namaRumahSakit);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Gagal mengambil data nama rumah sakit" });
  }
}

// Menambahkan data nama rumah sakit baru
async function addNamaRumahSakit(req, res) {
  const { kota, spesialisasi } = req.body;
  try {
    const newNamaRumahSakit = await NamaRumahSakit.create({
      kota,
      spesialisasi,
    });
    return res
      .status(201)
      .json({
        message: "Data nama rumah sakit berhasil ditambahkan",
        newNamaRumahSakit,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Gagal menambahkan data nama rumah sakit" });
  }
}

module.exports = {
  getAllNamaRumahSakit,
  addNamaRumahSakit,
};
