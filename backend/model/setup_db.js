const dbModel = require('../utilities/connection')
const bcrypt = require('bcrypt');

const empData = async () => {
  const hash = async (password) => {
    return await bcrypt.hash(password, 10);
  };

  return [
    {
    empId: "1001",
    name: "Mahika Dawar",
    email: "mahikadawar@gmail.com",
    password: await hash("Mahika@123"),
    role: "admin",
    gender: "Female",
    address: "Mussoorie-Diversion Road, Village Makkawala, Dehradun",
    location: "Hyderabad"
  },
    {
    empId: "1002",
    name: "Nethi Sai Deekshith",
    email: "nethisaideekshith@gmail.com",
    password: await hash("Deekshith@123"),
    role: "hr",
    gender: "Male",
    address: "456 HR Avenue, Hyderabad",
    location: "Hyderabad"
  },
    {
    empId: "1003",
    name: "Himanshi Sharma",
    email: "himanshisharma@gmail.com",
    password: await hash("Himanshi@123"),
    role: "employee",
    gender: "Female",
    address: "789 Employee Road, Mumbai",
    location: "Mumbai",
    skills: ["JavaScript", "Angular", "Node.js"],
    currentProject: true,
    experience: 3
  }
  ];
};

const jobData=[
  {
    "jobId": "J001",
    "title": "Frontend Developer",
    "description": "Responsible for building and maintaining user interfaces using React.js and Material-UI.",
    "location": "Hyderabad",
    "department": "Engineering",
    "skills": ["React.js", "JavaScript", "Bootstrap", "HTML", "CSS"],
    "postedDate": "2025-08-14T10:00:00Z",
    "lastDate": "2025-09-14T23:59:59Z",
    "updatedAt": "2025-08-14T10:00:00Z",
    "isActive": true,
    "postedBy": "1002"
  },
  {
    "jobId": "J002",
    "title": "Backend Developer",
    "description": "Develop and maintain backend services using Node.js and MongoDB.",
    "location": "Bangalore",
    "department": "Engineering",
    "skills": ["Node.js", "Express", "MongoDB", "REST APIs"],
    "postedDate": "2025-08-14T11:00:00Z",
    "lastDate": "2025-09-20T23:59:59Z",
    "updatedAt": "2025-08-14T11:00:00Z",
    "isActive": true,
    "postedBy": "1002"
  },
  {
    "jobId": "J003",
    "title": "UI/UX Designer",
    "description": "Design visually appealing and user-friendly interfaces for web applications.",
    "location": "Pune",
    "department": "Design",
    "skills": ["Figma", "Adobe XD", "UI Design", "UX Research"],
    "postedDate": "2025-08-14T12:00:00Z",
    "lastDate": "2025-09-10T23:59:59Z",
    "updatedAt": "2025-08-14T12:00:00Z",
    "isActive": true,
    "postedBy": "1002"
  },
  {
    "jobId": "J004",
    "title": "Data Analyst",
    "description": "Analyze datasets and generate business insights using Python and SQL.",
    "location": "Chennai",
    "department": "Data Science",
    "skills": ["Python", "SQL", "Data Visualization", "Power BI"],
    "postedDate": "2025-08-14T13:00:00Z",
    "lastDate": "2025-09-25T23:59:59Z",
    "updatedAt": "2025-08-14T13:00:00Z",
    "isActive": true,
    "postedBy": "1002"
  }
]


exports.getDB_SetUp = async () => {
  const employeeCollection = await dbModel.getEmployees();
  const jobCollection = await dbModel.getJobs();

  // Clear old data
  await employeeCollection.deleteMany();
  await jobCollection.deleteMany();

  // Insert Employees
  const employees = await empData();
  const empResult = await employeeCollection.insertMany(employees);

  // Insert Jobs
  const jobResult = await jobCollection.insertMany(jobData);

  if (empResult.length > 0 && jobResult.length > 0) {
    return "Insertion Succeeded!";
  } else {
    let err = new Error("Failed to SetUp DB");
    err.status = 500;
    throw err;
  }
};
