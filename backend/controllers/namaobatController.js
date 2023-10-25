const { NamaObat } = require("../models"); // Import model Sequelize NamaObat

// Mengambil semua data obat
async function getAllNamaObat(req, res) {
  try {
    const namaObat = await NamaObat.findAll();
    return res.status(200).json(namaObat);
  } catch (error) {
    return res.status(500).json({ error: "Gagal mengambil data obat" });
  }
}

// Menambahkan data obat baru
async function addNamaObat(req, res) {
  const { manfaat, dosis, efekSamping } = req.body;
  try {
    const newNamaObat = await NamaObat.create({ manfaat, dosis, efekSamping });
    return res
      .status(201)
      .json({ message: "Data obat berhasil ditambahkan", newNamaObat });
  } catch (error) {
    return res.status(500).json({ error: "Gagal menambahkan data obat" });
  }
}

module.exports = {
  getAllNamaObat,
  addNamaObat,
};
