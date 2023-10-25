const { DataAdmin } = require("../models"); // Pastikan Anda mengimpor model Sequelize yang sesuai

async function getAllDataAdmin(req, res) {
  try {
    const dataAdmin = await DataAdmin.findAll();
    res.status(200).json(dataAdmin);
  } catch (error) {
    res.status(500).json({ error: "Terjadi kesalahan dalam permintaan." });
  }
}

async function addDataAdmin(req, res) {
  try {
    const { namaLengkap, username, email, noHp } = req.body;
    const newDataAdmin = await DataAdmin.create({
      namaLengkap,
      username,
      email,
      noHp,
    });
    res.status(201).json(newDataAdmin);
  } catch (error) {
    res.status(500).json({ error: "Terjadi kesalahan dalam permintaan." });
  }
}

module.exports = {
  getAllDataAdmin,
  addDataAdmin,
};
