const Amplify = require("aws-amplify");
const config = require("./initialize");
const AddressModel = require("./address");
const SkillModel = require("./skills");

const updateEmployeeMutation = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id,
      firstname,
      lastname
    }
  }
`;

async function updateEmployee(employeeData) {
    const address = employeeData.input.address;
    const skills = employeeData.input.skills;
    delete employeeData.input.address;
    delete employeeData.input.skills;
    console.log(address, skills);
    let updateEmployeeResult, updateAddressResult, updateSkillResult;
    console.log("employeedata", JSON.stringify(employeeData, 6));
    try {
      updateEmployeeResult = await Amplify.API.graphql(
        Amplify.graphqlOperation(updateEmployeeMutation, employeeData)
      );
      if (address) {
         updateAddressResult =  await updateAddressAndLink(
          address,
        );
      }
      if (skills) {
         updateSkillResult = await updateSkillAndLink(skills);
      }

      return formatEmployeeResult(updateEmployeeResult.data.updateEmployee, updateAddressResult, updateSkillResult);

    } catch (e) {
      console.log(e);
    }
  
  }
  
  function updateAddressAndLink(address) {
    return Promise.all(
      address.map(async item => {
        return await AddressModel.updateAddress({ input: item });
      })
    )
      .then(result => {
        return result
      })
      .catch(e => {
        console.log(e);
      });
  }
  
  function updateSkillAndLink(skill) {
    return Promise.all(
      skill.map(async item => {
        return await SkillModel.updateSkill({ input: item });
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
  
  
  function formatEmployeeResult(employee, address = [], skills = []) {
    console.log(">>>>>>>>>>>>>>>>", employee, address, skills)
    const formateedResult = {
      ...employee,
      address,
      skills
    }
    return formateedResult;
  }

  module.exports.updateEmployee = updateEmployee;
  