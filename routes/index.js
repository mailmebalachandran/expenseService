const express = require('express');
const router = express.Router();
const {
    getExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense,
    getDashboard,
    getDashboardBasedOnMonth
} = require('../controllers/expenseController');
const jwtAuthValidation = require('./jwtAuth');
const categoryController = require('../controllers/categoryController');

router.get('/getExpenses', jwtAuthValidation, getExpenses); //Collection of expenses
router.get('/getExpense', jwtAuthValidation, getExpense); //Collection of expense
router.post('/createExpense', jwtAuthValidation, createExpense); //Creation of expense
router.put('/updateExpense', jwtAuthValidation, updateExpense); //Updation of expense
router.delete('/deleteExpense', jwtAuthValidation, deleteExpense); //Deletion of expense
router.get('/getDashboard', jwtAuthValidation, getDashboard); //Dashboard Expense
router.get('/getDashboardBasedOnMonth', jwtAuthValidation, getDashboardBasedOnMonth); //Dashboard Expense
router.get('/getCategory', jwtAuthValidation, categoryController.getCategories);

module.exports = router;