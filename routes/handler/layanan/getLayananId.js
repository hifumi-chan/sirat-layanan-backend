const { Layanan } = require('../../../models');

module.exports = async (req, res) => {
  const id  = req.params.id;

  const layanan = await Layanan.findByPk(id, {
    attributes: ['id', 'nama_layanan', 'deskripsi']
  });

  if (!layanan) {
    return res.status(404).json({
      status: 'error',
      message:'layanan not found'
    });
  }

  return res.json({
    status: 'susccess',
    data: layanan
  });
}