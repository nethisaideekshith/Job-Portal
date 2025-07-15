class Employee {
  constructor(obj) {
    this.empId = obj.empId;
    this.name = obj.name;
    this.email = obj.email;
    this.password = obj.password;
    this.role = obj.role;
    this.gender = obj.gender;
    this.address = obj.address;
    this.location = obj.location;
    this.skills = obj.skills;
    this.currentProject = obj.currentProject;
    this.experience = obj.experience;
  }
}

module.exports = Employee;