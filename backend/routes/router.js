const employeeServices = require('../services/employeeServices');
const adminServices=require('../services/adminServices');
const hrServices=require('../services/hrServices');
const Employee= require('../model/employee');
const express = require('express');
const router = express.Router();

router.post('/login', async (req, res, next) => {
    try {
        // console.log("Inside login router")
        const employee = await employeeServices.login(req.body.email, req.body.password,req.body.role);
        res.status(200).json(employee);
    }
    catch (err) {
        next(err);
    }
})

router.post('/addEmployee', async (req, res, next)=>{
    try{
        const empObj= new Employee(req.body);
        const emp1= await adminServices.addEmployee(empObj);
        res.json({ "message": "Employee added succesfully", "EmployeeData": emp1 });
    }
    catch(err){
        next(err);
    }
})

module.exports=router;