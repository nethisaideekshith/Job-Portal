const mongoose = require('mongoose')
const bcrypt=require('bcrypt');
require("dotenv").config(); 

//Job Schema

const jobSchema = mongoose.Schema({
  jobId:{
    type: String,
    required:true,
    unique:true
  },
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  location:{
    type: String,
    required: true
  },
  department:{
    type: String,
    required: true
  },
  skills:{
    type: [String]
  },
  postedDate:{
    type: String,
    default: Date.now
  },
  lastDate:{
    type: String,
    required: true
  },
  updatedAt:{
    type: String,
    default: Date.now
  },
  isActive:{
    type: Boolean,
    default: true
  },
  postedBy:{
    type: String,       // Employee Id
    required: true
  }
})


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

db.getJobs= async ()=>{
  const model=await dbConnection.model("Job",jobSchema);
  return model;
}

//Exporting database

module.exports=db;