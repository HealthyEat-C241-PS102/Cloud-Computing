const express = require('express');
const path = require('path');
const { getFruitById, getFruitIncrease, getFruitDecrease, addFruit, getFruit, findByClasses, addClasses} = require(path.join(__dirname, '../controller/controller.js'));
const router = express.Router();

router.get("/fruit/increase", getFruitIncrease);
router.get("/fruit/decrease", getFruitDecrease);
router.get("/fruit", getFruit);
router.get("/fruit/:fruit_id", getFruitById);
router.post("/classes/add", addClasses)
router.post("/add", addFruit);
router.get('/classes', findByClasses);


module.exports = router;
