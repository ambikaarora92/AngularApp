function Employee(empDetails) {
  "use strict";
  this.empDetails = {};
  if (empDetails) {
    this.empDetails.name = empDetails.name;
    this.empDetails.gender = empDetails.gender;
    this.empDetails.dob = empDetails.dob;
  }
}