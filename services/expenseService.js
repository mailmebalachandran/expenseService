const {expense}=require('../controllers/expenseController');
const {Expense}=require('../models/expenseUser');


//Collection Of Expense
async function getExpense(){
    const getexpense=await Expense.find();
    return getexpense;
}

//Creation of Expense
async function saveExpense(expense){
    const result=await expense.save();
}

//Updation of Expense
async function updateExpense(reqid,expense){
    try{
    const spentTo=expense.spentTo.length;
    const perHead=expense.perHead;
    const amount=spentTo * perHead;
    const updateexpense=await Expense.findByIdAndUpdate({_id:reqid},{
        $set:{
            spentBy: expense.spentBy,
            spentTo: expense.spentTo,
            createdBy: expense.createdBy,
            perHead: expense.perHead,
            amount: amount
        }}
        
    );
    return updateExpense;
    }
    catch(err){
        console.log("Error to be handled");
    }
}

//Deletion of Expense
async function deleteExpense(req){
    try{
        const expense=await Expense.findByIdAndDelete(req);
        return expense;

    }
    catch(err){
        console.log("Error to be handled:"+err);
    }
}

module.exports={getExpense,saveExpense,updateExpense,deleteExpense};
