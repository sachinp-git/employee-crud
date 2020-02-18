const Amplify = require("aws-amplify");
const config = require("./initialize");
Amplify.default.configure(config.aws);

const createAddress = /* GraphQL */ `
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

const updateAddressMutation = /* GraphQL */ `
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

const deleteAddressMutation = /* GraphQL */ `
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
async function addAddress (addressData) {
    let result
    try {
         result = await Amplify.API.graphql(Amplify.graphqlOperation(createAddress, addressData));
         console.log(JSON.stringify(result,5))
          return result.data.createAddress;
    } catch(e) {
        console.log(e)
    }
}

async function updateAddress (addressData) {
    let result
    try {
         result = await Amplify.API.graphql(Amplify.graphqlOperation(updateAddressMutation, addressData));
         console.log(JSON.stringify(result,5))
         return result.data.updateAddress;
        } catch(e) {
        console.log(e)
        throw new error(e)
    }
}

async function deleteAddress(addressData) {
    let result
    try {
         result = await Amplify.API.graphql(Amplify.graphqlOperation(deleteAddressMutation, addressData));
         console.log(JSON.stringify(result,5), "<<<< delelted address")
         return result.data.deleteAddress;
    } catch(e) {
        throw new error(e)
    }
}


module.exports.addAddress = addAddress;
module.exports.updateAddress = updateAddress;
module.exports.deleteAddress = deleteAddress;