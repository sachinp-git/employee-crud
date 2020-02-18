import Amplify, { API, graphqlOperation } from "aws-amplify";
import config from '../aws-exports';
Amplify.configure(config);
import { addNewEmployee, editEmployee, removeEmployee } from '../graphql/mutations.js';
import { listEmployees, getEmployee } from '../graphql/queries'

async function addNewEmployeefunc (data) {
    try {
        const newEmployee = await API.graphql(graphqlOperation(addNewEmployee, data));
        return newEmployee
    } catch (e) {
        return e
    }
}

async function editEmployeefunc (data) {
    try {
        const updatedEmployee = await API.graphql(graphqlOperation(editEmployee, data));
        return updatedEmployee
    } catch (e) {
        return e
    }
    
}

async function listEmployeesfunc () {
    try {
        const employeeList = await API.graphql(graphqlOperation(listEmployees));
        return employeeList   
    } catch(e) {
        return e
    }
}

async function getEmployeefunc (data) {
    try {
        const employee = await API.graphql(graphqlOperation(getEmployee, data));
        return employee
    } catch(e) {
        return e
    }
}

async function deleteEmployeeFunc (data) {
    try {
        const employee = await API.graphql(graphqlOperation(removeEmployee, data));
        return employee
    } catch(e) {
        return e
    }
}

export {addNewEmployeefunc, editEmployeefunc, getEmployeefunc, listEmployeesfunc, deleteEmployeeFunc};