const employeeServices = require('../services/employeeServices');
const adminServices=require('../services/adminServices');
const hrServices=require('../services/hrServices');
const Employee= require('../model/employee');
const Job= require('../model/job');
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

router.get('/getAllJobs',async (req,res,next)=>{
    try{
        const jobs= await employeeServices.getAllJobs();
        res.json(jobs);
    }
    catch(err){
        next(err);
    }
})

router.post('/addJob',async (req,res,next)=>{
    try{
        console.log(req.body);
        const jobObj= new Job(req.body);
        const job1= await hrServices.addJob(jobObj);
        res.json(job1);
    }
    catch(err){
        next(err);
    }
})


module.exports=router;