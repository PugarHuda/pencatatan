const { NamaPenyakit } = require("../models"); // Import model Sequelize NamaPenyakit

// Mengambil semua data penyakit
async function getAllNamaPenyakit(req, res) {
  try {
    const namaPenyakit = await NamaPenyakit.findAll();
    return res.status(200).json(namaPenyakit);
  } catch (error) {
    return res.status(500).json({ error: "Gagal mengambil data penyakit" });
  }
}

// Menambahkan data penyakit baru
async function addNamaPenyakit(req, res) {
  const { tanda, penyebab, gejala, caraMengobati } = req.body;
  try {
    const newNamaPenyakit = await NamaPenyakit.create({
      tanda,
      penyebab,
      gejala,
      caraMengobati,
    });
    return res
      .status(201)
      .json({ message: "Data penyakit berhasil ditambahkan", newNamaPenyakit });
  } catch (error) {
    return res.status(500).json({ error: "Gagal menambahkan data penyakit" });
  }
}

module.exports = {
  getAllNamaPenyakit,
  addNamaPenyakit,
};
