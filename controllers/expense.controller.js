const mongoose=require('mongoose');
const {Expense}=require('../models/expenseUser');

//Creation of new Expense
async function createExpense(req, res) {
    try{
    const { spentBy, spentTo, createdBy,perHead,amount } = req.body;

    const expense=await new Expense({
        spentBy: req.body.spentBy,
        spentTo: req.body.spentTo,
        createdBy: req.body.createdBy,
        perHead: req.body.perHead,
        amount: spentTo.length*perHead
    });

    // const result=await expense.save();
    res.status(200).send("New Expense Is Created")
}
catch(err)
{
    console.log("Error to be handled:",err);
}
    
}


exports.createExpense=createExpense;