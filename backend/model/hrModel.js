const connection=require('../utilities/connection');
const hrModel={};

hrModel.addJob=async (jobObj)=>{
    try{
        const jobs=await connection.getJobs();
        job1=await jobs.insertOne(jobObj);
        return job1;
    }
    catch(error){
        throw error;
    }
}

module.exports=hrModel;