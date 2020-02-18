const Amplify = require("aws-amplify");
const config = require("./initialize");
Amplify.default.configure(config.aws);

const createSkill = /* GraphQL */ `
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

const updateSkillMutation = /* GraphQL */ `
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

const deleteSkillMutation = /* GraphQL */ `
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
async function addSkill (skillData) {
    let result
    try {
         result = await Amplify.API.graphql(Amplify.graphqlOperation(createSkill, skillData));
    } catch(e) {
        console.log(e)
    }
    console.log(JSON.stringify(result,5))
    return result.data.createSkill;
}

async function updateSkill (skillData) {
    let result;
    try {
        result = await Amplify.API.graphql(Amplify.graphqlOperation(updateSkillMutation, skillData));
    } catch(e) {
        console.log(e)
    }
    console.log(JSON.stringify(result,5))
    return result.data.updateSkill;
}

async function deleteSkill (skillData) {
    let result;
    try {
        result = await Amplify.API.graphql(Amplify.graphqlOperation(deleteSkillMutation, skillData));
    } catch(e) {
        console.log(e)
    }
    console.log(JSON.stringify(result,5))
    return result.data.deleteSkill;
}

module.exports.addSkill = addSkill;
module.exports.updateSkill = updateSkill;
module.exports.deleteSkill = deleteSkill;