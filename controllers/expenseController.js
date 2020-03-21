const mongoose = require('mongoose');
const { Expense } = require('../models/expenseUser');
const expenseService = require('../services/expenseService');



//Collection of Expense
async function getExpense(req, res){
    try{
        let expense=await expenseService.getExpense();
        res.status(200).send(expense);
    }
    catch(err)
    {
        console.log("Error to be handled:"+err);
    }
}
//Creation of new Expense
async function createExpense(req, res) {
    try {
        const { spentBy, spentTo, createdBy, perHead, amount } = req.body;

        const expense = await new Expense({
            spentBy: req.body.spentBy,
            spentTo: req.body.spentTo,
            createdBy: req.body.createdBy,
            perHead: req.body.perHead,
            amount: spentTo.length * perHead
        });

        expenseService.saveExpense(expense);

        res.status(200).send("New Expense Is Created")
    }
    catch (err) {
        console.log("Error to be handled:", err);
    }

}


exports.getExpense=getExpense;
exports.createExpense = createExpense;
