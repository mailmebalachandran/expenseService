const mongoose = require('mongoose');
const { Expense } = require('../models/expenseUser');
const expenseService = require('../services/expenseService');
const expensevalidation = require('../validation/expenseValidation');



//Collection of Expense
async function getExpense(req, res) {
    try {
        let expense = await expenseService.getExpense();
        if (!expense) {
            return res.status(400).send({ message: "Expense was not found" })
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

        //Validate for Creation of Expense
        const { error } = await expensevalidation.validateCreate(req.body);
        console.log("in controller" + error);

        if (error) res.status(400).send({ message: error.details[0].message });

        expenseService.saveExpense(req.body);
        res.status(200).send({ message: "New Expense is Created" })
    }
    catch (err) {
        console.log("Error to be handled:", err);
    }

}

//Updation of Expense
async function updateExpense(req, res) {
    try {
        const { id, spentBy, spentTo, createdBy, perHead, amount } = req.body;
        const expenses = {
            spentBy: req.body.spentBy,
            spentTo: req.body.spentTo,
            createdBy: req.body.createdBy,
            perHead: req.body.perHead,
        }
        const { error } = await expensevalidation.validateUpdate(req.body);

        if (error) return res.status(400).send({ message: error.details[0].message });

        const expense = await expenseService.updateExpense(req.body.id, expenses);

        return res.status(200).send({ message: "Expense is Updated Successfully" });

    }
    catch (err) {
        console.log('Error to be handled:' + err);
    }
}

//Deletion of Expense
async function deleteExpense(req, res) {
    try {
        const { error } = await expensevalidation.validateDelete(req.body);

        if (error) return res.status(400).send({ message: error.details[0].message });

        const expense = expenseService.deleteExpense(req.body.id);
        res.status(200).send({ message: "Expense deleted successfully" });
    }
    catch (err) {
        console("Error to be handled" + err);
    }

}


exports.getExpense = getExpense;
exports.createExpense = createExpense;
exports.updateExpense = updateExpense;
exports.deleteExpense = deleteExpense;
