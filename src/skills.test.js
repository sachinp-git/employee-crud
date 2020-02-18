import {
    addNewSkillfunc,
    editSkillfunc,
    listSkillfunc,
    deleteSkill
  } from "./test-functions/skills";
  
  test("Add new skill", async () => {
    const data = {
      input: {
        skillName: "React js"
      }
    };
    const result = await addNewSkillfunc(data);
    console.log(JSON.stringify(result, 6));
    expect(result.data).not.toBeUndefined();
    expect(result.errors).toBeUndefined();
  });
  
  test("Add new skill without skill Name", async () => {
    const data = {
      input: {
           
      }
    };
    const result = await addNewSkillfunc(data);
    console.log(JSON.stringify(result, 6));
    expect(result.errors).toBeTruthy();
  });
  
  test("list skills", async () => {
    const result = await listSkillfunc();
    console.log(JSON.stringify(result, 6));
    expect(result.data).not.toBeUndefined();
    expect(result.data).not.toBeNull();
    expect(result.errors).toBeUndefined();
  });
  
  
  test("update existing skill", async () => {
    const data = {
      input: {
        id: "0a8fddf2-a8ea-4e09-86af-92941160c575",
        skillName: "Python"
      }
    };
  
    const result = await editSkillfunc(data);
    console.log(JSON.stringify(result, 6));
    expect(result.errors).toBeUndefined();
    expect(result.data).not.toBeUndefined();
    expect(result.data).not.toBeNull();
  });
  
  test("delete existing skill", async () => {
    const data = {
      input: {
        id: "73e3b7dc-cd1b-43b1-8947-91a46c97fb41"
      }
    };
  
    const result = await deleteSkill(data);
    console.log(JSON.stringify(result, 6));
    expect(result.errors).toBeUndefined();
    expect(result.data).not.toBeUndefined();
    expect(result.data).not.toBeNull();
  });
  