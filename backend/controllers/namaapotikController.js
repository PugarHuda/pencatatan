const { NamaApotik } = require("../models"); // Import model Sequelize NamaApotik

// Mengambil semua data apotik
async function getAllNamaApotik(req, res) {
  try {
    const namaApotik = await NamaApotik.findAll();
    return res.status(200).json(namaApotik);
  } catch (error) {
    return res.status(500).json({ error: "Gagal mengambil data apotik" });
  }
}

// Menambahkan data apotik baru
async function addNamaApotik(req, res) {
  const { kota } = req.body;
  try {
    const newNamaApotik = await NamaApotik.create({ kota });
    return res
      .status(201)
      .json({ message: "Data apotik berhasil ditambahkan", newNamaApotik });
  } catch (error) {
    return res.status(500).json({ error: "Gagal menambahkan data apotik" });
  }
}

module.exports = {
  getAllNamaApotik,
  addNamaApotik,
};
