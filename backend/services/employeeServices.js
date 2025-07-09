const employeeModel=require('../model/employeeModel');
const validators=require('../utilities/validator');
const employeeServices={};

//Employee Login

employeeServices.login=async(email,password,role)=>{
    try{
        validators.validateEmail(email);
        validators.validatePassword(password);
        validators.validateRole(role);
        user=await employeeModel.checkUser(email,password,role);
        return user;
    }
    catch(error){
        throw error;
    }
}

//Exporting employee services
module.exports=employeeServices;