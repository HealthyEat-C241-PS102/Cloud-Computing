// //tierModel.js
// const { Sequelize } = require('sequelize');
// const db = require('../config/databaseFruit');

// const fruit = db.define("fruit-test", {
//     id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     buah: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     tujuan: {
//         type: Sequelize.ENUM('Menurunkan Berat Badan', 'Menaikkan Berat Badan'),
//         allowNull: false,
//     },
//     urutan: {
//         type: Sequelize.ENUM('S', 'A', 'B', 'C', 'D'),
//         allowNull: false,
//     },
//     deskripsi: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     }
// }, {
//     logging: true,
//     timeStamps: false
// });

// fruit.sync( {force: true} ).then((data) => {
//     console.log('Tabel dan model fruit sudah tersinkron!');
// }).catch((err) => {
//     console.log('Error saat sinkronisasi');
// })

// module.exports = fruit;