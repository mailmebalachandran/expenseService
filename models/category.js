const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    CategoryName:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: false
    }
})
module.exports = mongoose.model('ExpenseCategory', categorySchema, 'ExpenseCategory');