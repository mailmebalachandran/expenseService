const express=require('express');
const router=express.Router();
const {app}=require('../app');
const {getExpense,createExpense,updateExpense,deleteExpense}=require('../controllers/expenseController')

router.get('/', getExpense); //Collection of expense
router.post('/', createExpense); //Creation of expense
router.put('/', updateExpense); //Updation of expense
router.delete('/',deleteExpense); //Deletion of expense 


module.exports=router;