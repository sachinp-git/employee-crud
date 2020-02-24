import {
  addNewAddressfunc,
  editAddressfunc,
  listAddressfunc,
  deleteAddress
} from "./test-functions/address";

let generatedAddressId;
let addressIdTodelete;

test("Add new address", async () => {
  const data = {
    input: {
      line1: "A-2 604",
      line2: "Ambrossia",
      zipcode: "400615",
      city: "thane",
      state: "Maharashtra"
    }
  };
  const result = await addNewAddressfunc(data);
  generatedAddressId = result.data.addNewAddress.id;
  console.log(JSON.stringify(result, 6));
  expect(result.data).not.toBeNull();
  expect(result.errors).toBeUndefined();
});


test("Add new address without zipcode", async () => {
  const data = {
    input: {
          line1: "A-2 604",
          line2: "Manutd",
          city: "manchester",
          state: "england"    
    }
  };
  const result = await addNewAddressfunc(data);
  console.log(JSON.stringify(result, 6));
  expect(result.errors).toBeTruthy();
});

test("Add new address to delete", async () => {
  const data = {
    input: {
          line1: "A-2 604",
          line2: "Manutd",
          city: "manchester",
          state: "england",
          zipcode: "400001"
    }
  };
  const result = await addNewAddressfunc(data);
  addressIdTodelete = result.data.addNewAddress.id;
  console.log(JSON.stringify(result, 6));
  expect(result.data).not.toBeNull();
  expect(result.errors).toBeUndefined();
});


test("list addresses", async () => {
  const result = await listAddressfunc();
  console.log(JSON.stringify(result, 6));
  expect(result.data).not.toBeUndefined();
  expect(result.data).not.toBeNull();
  expect(result.errors).toBeUndefined();
});


test("update existing address", async () => {
  const data = {
    input: {
      id: generatedAddressId,
      city: "bhadohi"
    }
  };

  const result = await editAddressfunc(data);
  console.log(JSON.stringify(result, 6));
  expect(result.errors).toBeUndefined();
  expect(result.data).not.toBeUndefined();
  expect(result.data).not.toBeNull();
});

test("delete existing address", async () => {
  const data = {
    input: {
      id: addressIdTodelete
    }
  };

  const result = await deleteAddress(data);
  console.log(JSON.stringify(result, 6));
  expect(result.errors).toBeUndefined();
  expect(result.data).not.toBeUndefined();
  expect(result.data).not.toBeNull();
});
