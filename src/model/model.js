// userModel.js
const { Sequelize } = require('sequelize');
const db = require('../config/database');

const User = db.define("test-register2", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    logging: false,
    timeStamps: false
});

const fruit = db.define("fruit-test", {
    fruit_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    buah: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tujuan: {
        type: Sequelize.ENUM('Menurunkan Berat Badan', 'Menaikkan Berat Badan'),
        allowNull: false,
    },
    urutan: {
        type: Sequelize.ENUM('S', 'A', 'B', 'C', 'D'),
        allowNull: false,
    },
    deskripsi: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    logging: true,
    timeStamps: false
});

fruit.sync({ force: false }).then((data) => {
    console.log('Tabel dan model fruit sudah tersinkron!');
  }).catch((err) => {
    console.log('Error saat sinkronisasi');
  })
  

User.sync({ force: false}).then((data) => {
    console.log('Tabel dan model User sudah tersinkron!');
}).catch((err) => {
    console.log('Error saat sinkronisasi');
})

module.exports = {User, fruit};
