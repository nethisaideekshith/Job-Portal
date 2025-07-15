const adminModel=require('../model/adminModel');
const validators=require('../utilities/validator');

const adminServices={};

adminServices.addEmployee= async(empObj)=>{
    try{
        validators.validateEmail(empObj.email);
        validators.validatePassword(empObj.password);
        validators.validateRole(empObj.role);
        const emp=await adminModel.addEmployee(empObj);
        return emp;
    }
    catch(error){
        throw error;
    }
}

//Exporting Admin Services

module.exports=adminServices;