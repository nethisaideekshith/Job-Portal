const mongoose = require('mongoose')
const bcrypt=require('bcrypt');
require("dotenv").config(); 

//Employee Schema

const employeeSchema = mongoose.Schema({
    empId:{
      type:String,
      required:true,
      unique:true
    },  
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        require:true,
        enum: ['employee', 'hr', 'admin']
    },
    gender:{
      type:String,
      required:true,
      enum: ['Male','Female']
    },
    address:{
      type:String
    },
    location:{
      type:String
    },
    skills:{
      type:[String]
    },
    currentProject:{
      type:Boolean
    },
    experience:{
      type:Number
    }
})

//password hashing

employeeSchema.pre('save',async function(next){
  if(!this.isModified('password'))
    return next();
  this.password=await bcrypt.hash(this.password,10);
  next();
})


// Database Connection

let dbConnection;
let db={};
db.connectDb=async ()=>{
  try{
    dbConnection=await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected successfully");
  }
  catch(er){
    console.log("DB connection failed");
  }
}

//Employee Model

db.getEmployees= async ()=>{
  const model=await dbConnection.model("Employee",employeeSchema);
  return model;
}

//Exporting database

module.exports=db;