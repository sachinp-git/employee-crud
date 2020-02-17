import Amplify, { API, graphqlOperation } from "aws-amplify";
const config = require("../aws-exports");
Amplify.configure(config.config);
import { addNewEmployee, editEmployee } from '../graphql/mutations.js';
import { listEmployees, getEmployee } from '../graphql/queries'

async function addNewEmployeefunc (data) {
    const newEmployee = await API.graphql(graphqlOperation(addNewEmployee, data));
    return newEmployee
}

async function editEmployeefunc (data) {
    const updatedEmployee = await API.graphql(graphqlOperation(editEmployee, data));
    return updatedEmployee
}

async function listEmployeesfunc () {
    const employeeList = await API.graphql(graphqlOperation(listEmployees));
    return employeeList
}

async function getEmployeefunc (data) {
    const employee = await API.graphql(graphqlOperation(getEmployee, data));
    return employee
}

export {addNewEmployeefunc, editEmployeefunc, getEmployeefunc, listEmployeesfunc};