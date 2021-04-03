const {Layanan} = require('../../../models');

// Delete product berdasarkan id
module.exports = async (req, res) => {
  const id = req.params.id;
  const layanan = await Layanan.findByPk(id);
  if (!layanan) {
    return res.status(404).json({
      status: 'error',
      message: 'user not found'
    });
  }

  try {
    await Layanan.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({
      status: 'success',
      "message": "Layanan Deleted"
    });
  } catch (err) {
    console.log(err);
  }
}