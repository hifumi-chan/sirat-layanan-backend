const { Layanan } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    nama_layanan: 'string|empty:false',
    deskripsi: 'string|empty:false',
  }

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate
    });
  }

  const layanan = await Layanan.findOne({
    where: { nama_layanan: req.body.nama_layanan }
  });

  if (layanan) {
    return res.status(409).json({
      status: 'error',
      message: 'layanan already exist'
    });
  }

  const data = {
    nama_layanan: req.body.nama_layanan,
    deskripsi:req.body.deskripsi
  };

  const createdLayanan = await Layanan.create(data);

  return res.json({
    status: 'success',
    data: {
      id: createdLayanan.id
    }
  });
}