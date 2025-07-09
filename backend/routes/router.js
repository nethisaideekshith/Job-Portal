const employeeServices = require('../services/employeeServices');
const adminServices=require('../services/adminServices');
const hrServices=require('../services/hrServices');
const express = require('express');
const router = express.Router();

router.post('/login', async (req, res, next) => {
    try {
        const employee = await employeeServices.login(req.body.email, req.body.password,req.body.role);
        res.status(200).json(employee);
    }
    catch (err) {
        next(err);
    }
})

module.exports=router;