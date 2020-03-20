const express=require('express');
const router=express.Router();
const {app}=require('../app');
const {createExpense}=require('../controllers/expense.controller')

//Creation of expense
router.post('/', createExpense);


module.exports=router;