/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiEmployeeCrudGraphQLAPIIdOutput = process.env.API_EMPLOYEECRUD_GRAPHQLAPIIDOUTPUT
var apiEmployeeCrudGraphQLAPIEndpointOutput = process.env.API_EMPLOYEECRUD_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const models = require("./models");

const resolvers = {
  Mutation: {
    addNewEmployee: models.createEmployee,
    addNewSkill: models.createSkill,
    addNewAddress: models.createAddress,
    editSkill: models.updateSkill,
    editAddress: models.updateAddress,
    removeAddress: models.deleteAddress,
    removeSkill: models.deleteSkill,
    editEmployee: models.updateEmployee
  }
}

exports.handler = async (event) => {
    //console.log("Variables ==>", environment, region, apiEmployeeCrudGraphQLAPIEndpointOutput, apiEmployeeCrudGraphQLAPIIdOutput)
    // TODO implement
    console.log("EVENT --> ",JSON.stringify(event),2);
    const evetType = event.typeName;
    const eventName = event.fieldName;
    const eventHandler = resolvers[evetType][eventName];
    console.log(eventHandler);
    if (eventHandler) {
        const result = await eventHandler(event.arguments)
        console.log("Handler result",JSON.stringify(result,6))
        return result;
    }
};
