const { DataPasien } = require("../models"); // Import model Sequelize DataPasien

// Mengambil semua data pasien
async function getAllDataPasien(req, res) {
  try {
    const dataPasien = await DataPasien.findAll();
    return res.status(200).json(dataPasien);
  } catch (error) {
    return res.status(500).json({ error: "Gagal mengambil data pasien" });
  }
}

// Menambahkan data pasien baru
async function addDataPasien(req, res) {
  const { namaLengkap, alamat, email, noHp } = req.body;
  try {
    const newDataPasien = await DataPasien.create({
      namaLengkap,
      alamat,
      email,
      noHp,
    });
    return res
      .status(201)
      .json({ message: "Data pasien berhasil ditambahkan", newDataPasien });
  } catch (error) {
    return res.status(500).json({ error: "Gagal menambahkan data pasien" });
  }
}

module.exports = {
  getAllDataPasien,
  addDataPasien,
};
