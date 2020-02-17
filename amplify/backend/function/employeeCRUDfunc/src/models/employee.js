const Amplify = require("aws-amplify");
const config = require("./initialize");
const AddressModel = require("./address");
const SkillModel = require("./skills");
Amplify.default.configure(config.aws);

const listEmployeesQuery = /* GraphQL */ `
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

const createEmployeeQuery = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      firstname
      lastname  
    }
  }
`;

async function listEmployees() {
  let result;
  try {
    result = await Amplify.API.graphql(
      Amplify.graphqlOperation(listEmployeesQuery)
    );
  } catch (e) {
    console.log(e);
  }
  console.log(JSON.stringify(result, 5));
  return result;
}

async function createEmployee(employeeData) {
  const address = employeeData.input.address;
  const skills = employeeData.input.skills;
  delete employeeData.input.address;
  delete employeeData.input.skills;
  console.log(address, skills);
  let addEmployeeResult, addAddressResult, addSkillResult;
  console.log("employeedata", JSON.stringify(employeeData, 6));
  try {
    addEmployeeResult = await Amplify.API.graphql(
      Amplify.graphqlOperation(createEmployeeQuery, employeeData)
    );
    if (address) {
      addAddressResult = await addAddressAndLink(
        address,
        addEmployeeResult.data.createEmployee.id
      );
    }
    if (skills) {
     addSkillResult = await addSkillAndLink(skills, addEmployeeResult.data.createEmployee.id);
    }
  } catch (e) {
    console.log(e);
  }

  return formatEmployeeResult(addEmployeeResult.data.createEmployee, addAddressResult, addSkillResult);
}

function addAddressAndLink(address, employeeId) {
  return Promise.all(
    address.map(async item => {
      item.employeeAddressId = employeeId;
      return await AddressModel.addAddress({ input: item });
    })
  )
    .then(result => {
      console.log(JSON.stringify(result, 5));
      return result
    })
    .catch(e => {
      console.log(e);
    });
}

function addSkillAndLink(skill, employeeId) {
  return Promise.all(
    skill.map(async item => {
      item.employeeSkillsId = employeeId;
      return await SkillModel.addSkill({ input: item });
    })
  )
    .then(result => {
      console.log(JSON.stringify(result, 5));
      return result
    })
    .catch(e => {
      console.log(e);
    });
}


function formatEmployeeResult(employee, address =[], skills =[]) {
  const formateedResult = {
    ...employee,
    address,
    skills
  }
  return formateedResult;
}

module.exports.listEmployees = listEmployees;
module.exports.createEmployee = createEmployee;
