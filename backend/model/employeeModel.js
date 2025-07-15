const connection = require('../utilities/connection');
const bcrypt = require('bcrypt')
const employeeModel = {}

//Employee Login

employeeModel.checkEmployee = async (email, password, role) => {
  try {
    const employees = await connection.getEmployees();
    const employee1 = await employees.findOne({ email: email, role: role });

    if (!employee1) {
      const err = new Error('Employee not found');
      err.status = 404;
      throw err;
    }

    const isMatch = await bcrypt.compare(password, employee1.password);
    console.log('Password match:', isMatch);

    if (!isMatch) {
      const err = new Error('Invalid Password');
      err.status = 401;
      throw err;
    }

    return employee1;
  } catch (err) {
    throw err;
  }
};


module.exports=employeeModel;