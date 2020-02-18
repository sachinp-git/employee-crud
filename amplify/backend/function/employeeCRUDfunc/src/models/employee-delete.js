const Amplify = require("aws-amplify");
const config = require("./initialize");
const AddressModel = require("./address");
const SkillModel = require("./skills");
Amplify.default.configure(config.aws);

const deleteEmployeeMutation = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      firstname
      lastname
      address {
        items {
          id
        }
        nextToken
      }
      skills {
        items {
          id
        }
        nextToken
      }
    }
  }
`;


async function deleteEmployee(employeeData) {    
    let deleteEmployeeResult, deleteAddressResult, deleteSkillResult;
    console.log("employeedata", JSON.stringify(employeeData, 6));
    try {
        deleteEmployeeResult = await Amplify.API.graphql(
        Amplify.graphqlOperation(deleteEmployeeMutation, employeeData)
      );
        console.log(JSON.stringify(deleteEmployeeResult))
        let deletedEmployeeAddresses = deleteEmployeeResult.data.deleteEmployee.address.items

        deleteAddressResult =  await deleteAddress(
            deletedEmployeeAddresses
        );

        let deletedEmployeeSkills = deleteEmployeeResult.data.deleteEmployee.skills.items
        deleteSkillResult = await deleteSkill(deletedEmployeeSkills);

      return formatEmployeeResult(deleteEmployeeResult, deleteAddressResult, deleteSkillResult);

    } catch (e) {
      console.log(e);
    }
  
  }
  
  function deleteAddress(address) {
    return Promise.all(
      address.map(async item => {
        return await AddressModel.deleteAddress({ input: item });
      })
    )
      .then(result => {
        return result
      })
      .catch(e => {
        console.log(e);
      });
  }
  
  function deleteSkill(skill) {
    return Promise.all(
      skill.map(async item => {
        return await SkillModel.deleteSkill({ input: item });
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
      id: employee.data.deleteEmployee.id,
      firstname: employee.data.deleteEmployee.firstname,
      lastname: employee.data.deleteEmployee.lastname,
      address,
      skills
    }
    return formateedResult;
  }

  module.exports.deleteEmployee = deleteEmployee;
  