'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bitacoras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      },
      materia: {
        type: Sequelize.STRING
      },
      laboratorio: {
        type: Sequelize.CHAR(3)
      },
      grupo: {
        type: Sequelize.CHAR(4)
      },
      practica: {
        type: Sequelize.INTEGER
      },
      h_entrada: {
        type: Sequelize.TIME
      },
      nombre_practica: {
        type: Sequelize.STRING
      },
      encargado: {
        type: Sequelize.CHAR(50)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bitacoras');
  }
};