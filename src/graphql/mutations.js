/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addNewEmployee = /* GraphQL */ `
  mutation AddNewEmployee($input: AddNewEmployeeInput!) {
    addNewEmployee(input: $input) {
      id
      firstname
      lastname
      address {
        items {
          id
          line1
          line2
          city
          state
          zipcode
        }
        nextToken
      }
      skills {
        items {
          id
          skillName
        }
        nextToken
      }
    }
  }
`;
export const addNewAddress = /* GraphQL */ `
  mutation AddNewAddress($input: AddNewAddressInput!) {
    addNewAddress(input: $input) {
      id
      line1
      line2
      city
      state
      zipcode
    }
  }
`;
export const addNewSkill = /* GraphQL */ `
  mutation AddNewSkill($input: AddNewSkillInput!) {
    addNewSkill(input: $input) {
      id
      skillName
    }
  }
`;
export const editEmployee = /* GraphQL */ `
  mutation EditEmployee($input: UpdateEmployeeInput!) {
    editEmployee(input: $input) {
      id
      firstname
      lastname
      address {
        items {
          id
          line1
          line2
          city
          state
          zipcode
        }
        nextToken
      }
      skills {
        items {
          id
          skillName
        }
        nextToken
      }
    }
  }
`;
export const editAddress = /* GraphQL */ `
  mutation EditAddress($input: UpdateAddressInput!) {
    editAddress(input: $input) {
      id
      line1
      line2
      city
      state
      zipcode
    }
  }
`;
export const editSkill = /* GraphQL */ `
  mutation EditSkill($input: UpdateSkillInput!) {
    editSkill(input: $input) {
      id
      skillName
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      firstname
      lastname
      address {
        items {
          id
          line1
          line2
          city
          state
          zipcode
        }
        nextToken
      }
      skills {
        items {
          id
          skillName
        }
        nextToken
      }
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      firstname
      lastname
      address {
        items {
          id
          line1
          line2
          city
          state
          zipcode
        }
        nextToken
      }
      skills {
        items {
          id
          skillName
        }
        nextToken
      }
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
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
          line1
          line2
          city
          state
          zipcode
        }
        nextToken
      }
      skills {
        items {
          id
          skillName
        }
        nextToken
      }
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      line1
      line2
      city
      state
      zipcode
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      line1
      line2
      city
      state
      zipcode
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      line1
      line2
      city
      state
      zipcode
    }
  }
`;
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
      id
      skillName
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
      id
      skillName
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
      id
      skillName
    }
  }
`;
