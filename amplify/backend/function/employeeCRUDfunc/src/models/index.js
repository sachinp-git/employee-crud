const employeeActions = require("./employee");
const addressActions = require("./address");
const skillActions = require("./skills");
const updateEmployee = require("./employee-update");

module.exports.listEmployees = employeeActions.listEmployees;
module.exports.createEmployee = employeeActions.createEmployee;
module.exports.createSkill = skillActions.addSkill;
module.exports.createAddress = addressActions.addAddress;
module.exports.updateAddress = addressActions.updateAddress;
module.exports.updateSkill = skillActions.updateSkill;
module.exports.deleteSkill = skillActions.deleteSkill;
module.exports.deleteAddress = addressActions.deleteAddress;
module.exports.updateEmployee = updateEmployee.updateEmployee