import {
  addNewAddressfunc,
  editAddressfunc,
  listAddressfunc,
  deleteAddress
} from "./test-functions/address";

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
  console.log(JSON.stringify(result, 6));
  expect(result.data).not.toBeUndefined();
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
      id: "fe2c29b5-4cfb-43a7-a821-3fec2bc57625",
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
      id: "43e8a586-9f9e-4bf1-964e-f2df0a850cde"
    }
  };

  const result = await deleteAddress(data);
  console.log(JSON.stringify(result, 6));
  expect(result.errors).toBeUndefined();
  expect(result.data).not.toBeUndefined();
  expect(result.data).not.toBeNull();
});
