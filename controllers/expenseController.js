const mongoose = require('mongoose');
const { Expense } = require('../models/expenseUser');
const expenseService = require('../services/expenseService');
const expensevalidation = require('../validation/expenseValidation');



//Collection of Expense
async function getExpense(req, res) {
    try {
        let expense = await expenseService.getExpense();
        if (expense == null) {
            return res.status(404).send({ message: "No Expense is found in the system" })
        }
        return res.status(200).send(expense);
    }
    catch (err) {
        console.log("Controller Error: Get Expense " + err);
        return res.status(500).send({ message: "Internal Server Error" });
    }
}

//Creation of new Expense
async function createExpense(req, res) {
    try {

        //Validate for Creation of Expense
        const { error } = await expensevalidation.validateCreate(req.body);

        if (error) {
            return res.status(400)
                .send({
                    message: error.details[0].message
                });
        }

        await expenseService.saveExpense(req.body);

        return res.status(200).send({ message: "New Expense is Created" })
    }
    catch (err) {
        console.log("Controller Error: Create Expense " + err);
        return res.status(500).send({ message: "Internal Server Error" });
    }

}

//Updation of Expense
async function updateExpense(req, res) {
    try {

        const { error } = await expensevalidation.validateUpdate(req.body);

        if (error) {
            return res.status(400)
                .send({
                    message: error.details[0].message
                });
        }

        const expense = await expenseService.updateExpense(req.body);

        if (expense != null) {
            return res.status(200).send({ message: "Expense updated successfully" });
        }
        else {
            return res.status(404).send({ message: "Expense doesn't exist in the system" });
        }

    }
    catch (err) {
        console.log("Controller Error: Update Expense " + err);
        return res.status(500).send({ message: "Internal Server Error" });
    }
}

//Deletion of Expense
async function deleteExpense(req, res) {
    try {
        const { error } = await expensevalidation.validateDelete(req.body);

        if (error) {
            return res.status(400)
                .send({
                    message: error.details[0].message
                });
        }

        const expense = await expenseService.deleteExpense(req.body.id);

        if (expense != null) {
            return res.status(200).send({ message: "Expense deleted successfully" });
        }
        else {
            return res.status(404).send({ message: "Expense doesn't exist in the system" });
        }
    }
    catch (err) {
        console.log("Controller Error: Delete Expense " + err);
        return res.status(500).send({ message: "Internal Server Error" });
    }

}


exports.getExpense = getExpense;
exports.createExpense = createExpense;
exports.updateExpense = updateExpense;
exports.deleteExpense = deleteExpense;
