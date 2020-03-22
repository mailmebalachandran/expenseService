const express = require('express');
const Joi = require('@hapi/joi');


//Validation for Creation of Expense
async function validateCreate(body) {
    const joischema = Joi.object({
        spentBy: Joi.string().min(5).max(50).required(),
        spentTo: Joi.array().required(),
        createdBy: Joi.string().min(5).max(50).required(),
        amount: Joi.string().required(),
        perHead: Joi.string()
    });
    const joivalidate = joischema.validate(body);
    return joivalidate;
}

//Validation for Updation of Expense
async function validateUpdate(body){
    const joischema = Joi.object({
        id: Joi.string().min(10).max(50).required(),
        spentBy: Joi.string().min(5).max(50).required(),
        spentTo: Joi.array().required(),
        createdBy: Joi.string().min(5).max(50).required(),
        amount: Joi.string().required(),
        perHead: Joi.string()
    });
    const joivalidate = joischema.validate(body);
    return joivalidate;
}

async function validateDelete(body){
    const joischema = Joi.object({
        id: Joi.string().min(10).max(50).required()
    });
    const joivalidate = joischema.validate(body);
    return joivalidate;
}

module.exports = { validateCreate,validateUpdate,validateDelete }
