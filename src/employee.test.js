import {
  addNewEmployeefunc,
  editEmployeefunc,
  listEmployeesfunc,
  getEmployeefunc,
  deleteEmployeeFunc
} from "./test-functions/employee";

let empIdGenerated;
let addressIdGenerated;

test('Add new employee', async ()=> {

    const data = {
        input: {
            firstname: "Sachin",
            lastname: "Pandey",
            address: [
                {
                    line1: "A-2 604",
                    line2: "Ambrossia",
                    zipcode: "400615",
                    city: "thane",
                    state: "Maharashtra"
                }
            ]
        }
    }
    const result = await addNewEmployeefunc(data);
    empIdGenerated = result.data.addNewEmployee.id;
    addressIdGenerated = result.data.addNewEmployee.address.items[0].id;
    console.log(JSON.stringify(result,6));
    expect(result.data).not.toBeUndefined();
    expect(result.errors).toBeUndefined();
})

test('Add new employee with skill', async ()=> {

    const data = {
        input: {
            firstname: "Cristiano",
            lastname: "Ronaldo",
            address: [
                {
                    line1: "A-2 604",
                    line2: "Manutd",
                    zipcode: "400007",
                    city: "manchester",
                    state: "england"
                }
            ],
            skills: [
                {
                    skillName: 'shoot'
                },
                {
                    skillName: 'speed'
                }
            ]
        }
    }
    const result = await addNewEmployeefunc(data);
    console.log(JSON.stringify(result,6));
    expect(result.data).not.toBeUndefined();
    expect(result.errors).toBeUndefined();
})

test('list employees', async ()=> {
    const result = await listEmployeesfunc();
    console.log(JSON.stringify(result,6))
    expect(result.data).not.toBeUndefined();
    expect(result.data).not.toBeNull();
    expect(result.errors).toBeUndefined();

})

test('get existing employee by ID', async () => {
    const data = {
            id: empIdGenerated
    }
    const result = await getEmployeefunc(data);
    console.log(JSON.stringify(result,6))
    expect(result.errors).toBeUndefined();
    expect(result.data).not.toBeUndefined();
    expect(result.data).not.toBeNull();
})

test("update existing employee", async () => {
  const data = {
    input: {
      id: empIdGenerated,
      firstname: "Salah",
      address: [
        {
          id: addressIdGenerated,
          city: "Egypt"
        }
      ]
    }
  };

  const result = await editEmployeefunc(data);
  console.log(JSON.stringify(result, 6));
  expect(result.errors).toBeUndefined();
  expect(result.data).not.toBeUndefined();
  expect(result.data).not.toBeNull();
});

//Uncomment and add to id of an existing employee
// test("delete existing employee", async () => {
//   const data = {
//     input: {
//       id: "4e2b0841-8b83-4aa6-9b03-9ad02a65e462"
//     }
//   };

//   const result = await deleteEmployeeFunc(data);
//   console.log(JSON.stringify(result, 6));
//   expect(result.errors).toBeUndefined();
//   expect(result.data).not.toBeUndefined();
//   expect(result.data).not.toBeNull();
// });
