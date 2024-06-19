const express = require('express');
const path = require('path');
const { register, login} = require(path.join(__dirname, '../controller/controller.js'));
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
