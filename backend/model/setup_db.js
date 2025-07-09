const dbModel = require('../utilities/connection')
const bcrypt = require('bcrypt');

const empData = async () => {
  const hash = async (password) => {
    return await bcrypt.hash(password, 10);
  };

  return [
    {
      empId: 1001,
      name: "Mahika Dawar",
      email: "mahikadawar@gmail.com",
      password: await hash("Mahika@123"),
      role: "admin"
    },
    {
      empId: 1002,
      name: "Nethi Sai Deekshith",
      email: "nethisaideekshith@gmail.com",
      password: await hash("Deekshith@123"),
      role: "hr"
    },
    {
      empId: 1003,
      name: "Himanshi Sharma",
      email: "himanshisharma@gmail.com",
      password: await hash("Himanshi@123"),
      role: "employee"
    }
  ];
};


exports.getDB_SetUp = async () => {
  const storedData = await dbModel.getEmployees();
  await storedData.deleteMany();

  // Await the async function to get the array
  const employees = await empData();

  // Insert the array into the DB
  const data = await storedData.insertMany(employees);

  if (data.length > 0) {
    return "Insertion Succeeded!";
  } else {
    let err = new Error("Failed to SetUp DB");
    err.status = 500;
    throw err;
  }
};
