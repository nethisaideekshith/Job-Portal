const hrModel=require('../model/hrModel');
const hrServices={};

hrServices.addJob=async(jobObj)=>{
    try{
        newJob=await hrModel.addJob(jobObj);
        return newJob;
    }
    catch(error){
        throw error;
    }
}

module.exports=hrServices;