const {expense}=require('../controllers/expenseController');
const {Expense}=require('../models/expenseUser');
//Collection Of Expense
async function getExpense(){
    const expensedata=await Expense.find();
    return expensedata;
}


//Creation of Expense
async function saveExpense(expense){
    const result=await expense.save();
    
}


module.exports={getExpense,saveExpense};
