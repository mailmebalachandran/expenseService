const mongoose = require('mongoose');
const { Expense } = require('../models/expenseUser');
const expenseService = require('../services/expenseService');



//Collection of Expense
async function getExpense(req, res) {
    try {
        let expense = await expenseService.getExpense();
        if(!expense){
            return res.status(400).send("Expense was not found")
        }
        res.status(200).send(expense);
    }
    catch (err) {
        console.log("Error to be handled:" + err);
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
        if(!expense) return res.status(400).send("Expense is not found");
        expenseService.saveExpense(expense);

        res.status(200).send("New Expense Is Created")
    }
    catch (err) {
        console.log("Error to be handled:", err);
    }

}

//Updation of Expense
async function updateExpense(req, res) {
    try {
        const { spentBy, spentTo, createdBy, perHead, amount } = req.body;
        const expenses = {
            spentBy: req.body.spentBy,
            spentTo: req.body.spentTo,
            createdBy: req.body.createdBy,
            perHead: req.body.perHead,
        }
        if (!req.body.id)
            return res.status(400).send("The Userid is not found for the given Expense");
        const expense = await expenseService.updateExpense(req.body.id, expenses);

        return res.status(200).send("Expense is Updated Successfully");

    }
    catch (err) {
        console.log('Error to be handled:' + err);
    }
}

//Deletion of Expense
async function deleteExpense(req, res){
    try{
    if(!req.body.id) 
    return res.status(400).send("The Userid was not Found");
    const expense=expenseService.deleteExpense(req.body.id);
    res.status(200).send("Expense deleted successfully");
    }
    catch(err){
        console("Error to be handled"+err);
    }
    
}


exports.getExpense = getExpense;
exports.createExpense = createExpense;
exports.updateExpense = updateExpense;
exports.deleteExpense= deleteExpense;
