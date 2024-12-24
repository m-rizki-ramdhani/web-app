'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Username sudah terpakai.'  // Pesan jika username sudah ada di database
        },
        validate: {
          len: {
            args: [5, 50],
            msg: 'Username harus memiliki panjang minimal 5 karakter dan maksimal 50 karakter'
          },
          isAlpha: {
            msg: 'Username hanya boleh mengandung huruf (a-z)'
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [8, 25],
            msg: 'Password harus memiliki panjang minimal 8 karakter dan maksimal 25 karakter'
          },
          isAlpha: {
            msg: 'Password hanya boleh mengandung huruf (a-z)'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        isNumeric: true,
        validate: {
          len: {
            args: [12, 15],
            msg: 'phoneNumber harus memiliki panjang minimal 12 karakter dan maksimal 15 angka'
          }
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
    await queryInterface.dropTable('Users');
  }
};