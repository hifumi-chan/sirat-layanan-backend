'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('layanan', [
      {
        nama_layanan: "Baby SPA",
        deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_layanan: "Home Care",
        deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('layanan', null, {});

  }
};
