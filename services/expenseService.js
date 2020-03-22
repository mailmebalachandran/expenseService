const { Expense } = require('../models/expenseUser');


//Collection Of Expense
const getExpense = async () => {
    const getexpense = await Expense.find();
    return getexpense;
}

//Creation of Expense
async function saveExpense(expense) {
    try {
        const expenseData = new Expense(expense);
        const savedExpense = await expenseData.save();
        return savedExpense
    }
    catch (err) {
        return err;
    }
}

//Updation of Expense
async function updateExpense(expenseData) {
    try {
        expenseId = expenseData.id
        const updateExpense = await Expense.findByIdAndUpdate({ _id: expenseId }, { $set: expenseData });
        return updateExpense;
    }
    catch (err) {
        console.log("Service Error: Update Expense " + err);
    }
}

//Deletion of Expense
async function deleteExpense(deleteId) {
    try {
        const expense = await Expense.findByIdAndDelete(deleteId);
        return expense;
    }
    catch (err) {
        console.log("Error to be handled:" + err);
    }
}

module.exports = { getExpense, saveExpense, updateExpense, deleteExpense };
