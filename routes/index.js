const express=require('express');
const router=express.Router();
const {app}=require('../app');
const {getExpense,createExpense}=require('../controllers/expenseController')

router.get('/',getExpense); //Collection of expense
router.post('/', createExpense);//Creation of expense


module.exports=router;