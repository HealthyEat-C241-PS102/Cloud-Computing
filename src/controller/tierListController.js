// tierListController.js
// const express = require('express');
// const fruit = require('../model/userModel.js');
// const sequelize = require('../config/databaseFruit.js');
// const mysql = require('mysql2');

// const getFruitById = async (req, res) => {
//     const { id } = req.params; 
//     try {
//         const fruit = await User.findOne({ where: { id } }); 
//         if (!fruit) {
//             return res.status(404).json({ message: "Buah tidak ditemukan" });
//         }
//         res.status(200).json(fruit);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// const getFruit = async (req, res) => {
//     try {
//         const fruits = await User.findAll();
//         res.status(200).json(fruits);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// const addFruit = async (req, res) => {
//     const { id, buah, tujuan, urutan, deskripsi } = req.body;
//     const query = 'INSERT INTO `fruit-tests`(id, buah, tujuan, urutan, deskripsi) VALUES (?, ?, ?, ?, ?)';
//     sequelize.query(query, { replacements: [id, buah, tujuan, urutan, deskripsi], type: sequelize.QueryTypes.INSERT })
//         .then(() => {
//             res.status(201).json({ message: 'Data buah berhasil disimpan' });
//         })
//         .catch((error) => {
//             res.status(400).json({ message: error.message });
//         });
// }



// module.exports = { 
//     getFruit, 
//     getFruitById, 
//     addFruit
// }