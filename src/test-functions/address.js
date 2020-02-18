import Amplify, { API, graphqlOperation } from "aws-amplify";
import config from '../aws-exports';
Amplify.configure(config);
import { addNewAddress, editAddress, removeAddress } from '../graphql/mutations.js';
import { listAddresss } from '../graphql/queries'

async function addNewAddressfunc (data) {
    try {
        const newAddress = await API.graphql(graphqlOperation(addNewAddress, data));
        return newAddress
    } catch (e) {
        return e
    }
}

async function editAddressfunc (data) {
    try {
        const updatedAddress = await API.graphql(graphqlOperation(editAddress, data));
        return updatedAddress
    }catch (e) {
        return e
    }
    
}

async function listAddressfunc () {
    try {
        const addressList = await API.graphql(graphqlOperation(listAddresss));
        return addressList
    } catch(e) {
        return e
    }
}


async function deleteAddress (data) {
    try {
        const address = await API.graphql(graphqlOperation(removeAddress, data));
        return address
    } catch (e) {
        return e
    }
}

export {deleteAddress, listAddressfunc, editAddressfunc, addNewAddressfunc};