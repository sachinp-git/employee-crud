const Amplify = require("aws-amplify");

var environment = process.env.ENV
var region = process.env.REGION
var apiEmployeeCrudGraphQLAPIIdOutput = process.env.API_EMPLOYEECRUD_GRAPHQLAPIIDOUTPUT
var apiEmployeeCrudGraphQLAPIEndpointOutput = process.env.API_EMPLOYEECRUD_GRAPHQLAPIENDPOINTOUTPUT
var apikey = process.env.API_KEY

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_appsync_graphqlEndpoint": "https://xremduj2orfu5bznsva7qg4yiu.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-5taab4gy45eypivplqb4pezdv4"
};


const config =  {
    "aws_project_region": region,
    "aws_appsync_graphqlEndpoint": apiEmployeeCrudGraphQLAPIEndpointOutput,
    "aws_appsync_region": region,
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": apikey
};


module.exports.aws = awsmobile;