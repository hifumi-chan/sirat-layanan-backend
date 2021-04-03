const { Layanan } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {
  const schema ={
    nama_layanan: 'string|empty:false',
    deskripsi: 'string|empty:false',
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate
    });
  }

  const id = req.params.id;
  const layanan = await Layanan.findByPk(id);
  if (!layanan) {
    return res.status(404).json({
      status: 'error',
      message: 'user not found'
    });
  }

  const namaLayanan = req.body.nama_layanan;
  if (namaLayanan) {
    const checkLayanan = await Layanan.findOne({
      where: { nama_layanan: req.body.nama_layanan }
    });

    if (checkLayanan && namaLayanan !== layanan.nama_Layanan) {
      return res.status(409).json({
        status: 'error',
        message: 'layanan already exist'
      })
    }
  }

  const {
    nama_layanan, deskripsi
  } = req.body;

  await layanan.update({
    nama_layanan,
    deskripsi
  });


  return res.json({
    status: 'success',
    data: {
      id: layanan.id,
      nama_layanan,
      deskripsi
    }
  });
}