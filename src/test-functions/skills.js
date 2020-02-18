import Amplify, { API, graphqlOperation } from "aws-amplify";
import config from '../aws-exports';
Amplify.configure(config);
import { addNewSkill, editSkill, removeSkill } from '../graphql/mutations.js';
import { listSkills } from '../graphql/queries'

async function addNewSkillfunc (data) {
    try {
        const newAddress = await API.graphql(graphqlOperation(addNewSkill, data));
        return newAddress
    } catch (e) {
        return e
    }
}

async function editSkillfunc (data) {
    try {
        const updatedAddress = await API.graphql(graphqlOperation(editSkill, data));
        return updatedAddress
    }catch (e) {
        return e
    }
    
}

async function listSkillfunc () {
    try {
        const addressList = await API.graphql(graphqlOperation(listSkills));
        return addressList
    } catch(e) {
        return e
    }
}


async function deleteSkill (data) {
    try {
        const address = await API.graphql(graphqlOperation(removeSkill, data));
        return address
    } catch (e) {
        return e
    }
}

export {deleteSkill, listSkillfunc, editSkillfunc, addNewSkillfunc};