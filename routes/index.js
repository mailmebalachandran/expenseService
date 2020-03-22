const express = require('express');
const router = express.Router();
const { app } = require('../app');
const { getExpense, createExpense, updateExpense, deleteExpense } = require('../controllers/expenseController')

router.get('/getExpense', getExpense); //Collection of expense
router.post('/createExpense', createExpense); //Creation of expense
router.put('/updateExpense', updateExpense); //Updation of expense
router.delete('/deleteExpense', deleteExpense); //Deletion of expense


module.exports = router;