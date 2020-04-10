const ExpenseCategory = require('../models/category');

const getCategories = async () => {
    try{
        const categories = await ExpenseCategory.find();
        return categories;
    }
    catch(err){
        throw err;
    }
}

module.exports = { getCategories };