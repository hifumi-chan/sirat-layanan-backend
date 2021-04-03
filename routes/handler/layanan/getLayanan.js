const { Layanan } = require('../../../models');

module.exports = async(req, res) => {

  const layananIds = req.query.layanan_ids || [];

  const sqlOPtions = {
    attributes: ['id', 'nama_layanan', 'deskripsi']
  }

  if (layananIds.length) {
    sqlOPtions.where = {
      id: layananIds
    }
  }

  const layanan = await Layanan.findAll(sqlOPtions);

  return res.json({
    status: 'success',
    data: layanan
  })
}