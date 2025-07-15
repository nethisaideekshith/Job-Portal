const connection = require('../utilities/connection');
const adminModel={};

adminModel.addEmployee=async(newEmp)=>{
    try{
        const employees=await connection.getEmployees();
        const x=await employees.find({$or:[{email:newEmp.email},{empId:newEmp.empId}]});
        if (x.length > 0) {
            let error = new Error("Employee already exists");
            error.status = 500;
            throw error;
        }
        emp1 = await employees.insertOne(newEmp);
        return emp1;
    }
    catch(err){
        throw err;
    }
}

//Exporting Admin Model
module.exports=adminModel;