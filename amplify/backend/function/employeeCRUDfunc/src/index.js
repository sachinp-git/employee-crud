/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiEmployeeCrudGraphQLAPIIdOutput = process.env.API_EMPLOYEECRUD_GRAPHQLAPIIDOUTPUT
var apiEmployeeCrudGraphQLAPIEndpointOutput = process.env.API_EMPLOYEECRUD_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */
const Amplify = require("aws-amplify");

var environment = process.env.ENV
var region = process.env.REGION
var apiEmployeeCrudGraphQLAPIIdOutput = process.env.API_EMPLOYEECRUD_GRAPHQLAPIIDOUTPUT
var apiEmployeeCrudGraphQLAPIEndpointOutput = process.env.API_EMPLOYEECRUD_GRAPHQLAPIENDPOINTOUTPUT
var apikey = process.env.API_KEY

const config =  {
    "aws_project_region": environment,
    "aws_appsync_graphqlEndpoint": apiEmployeeCrudGraphQLAPIEndpointOutput,
    "aws_appsync_region": environment,
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": apikey
};

const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        address {
          nextToken
        }
        skills {
          nextToken
        }
      }
      nextToken
    }
  }
`;

Amplify.default.configure(config)

exports.handler = async (event) => {
    console.log("Variables ==>", environment, region, apiEmployeeCrudGraphQLAPIEndpointOutput, apiEmployeeCrudGraphQLAPIIdOutput)
    // TODO implement
    let result
    try {
         result = await Amplify.API.graphql(Amplify.graphqlOperation(listEmployees));
    } catch(e) {
        console.log(e)
    }
    console.log(result);
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
