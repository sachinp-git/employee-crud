import {
    addNewSkillfunc,
    editSkillfunc,
    listSkillfunc,
    deleteSkill
  } from "./test-functions/skills";
  
  let generatedSkillId;
  let skillIdToDelete;

  test("Add new skill", async () => {
    const data = {
      input: {
        skillName: "React js"
      }
    };
    const result = await addNewSkillfunc(data);
    generatedSkillId = result.data.addNewSkill.id;
    console.log(JSON.stringify(result, 6));
    expect(result.data).not.toBeUndefined();
    expect(result.errors).toBeUndefined();
  });
  
  test("Add new skill without skill Name", async () => {
    const data = {
      input: {}
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
        id: generatedSkillId,
        skillName: "Python"
      }
    };
  
    const result = await editSkillfunc(data);
    console.log(JSON.stringify(result, 6));
    expect(result.errors).toBeUndefined();
    expect(result.data).not.toBeUndefined();
    expect(result.data).not.toBeNull();
  });
  
  test("Add new skill to delete", async () => {
    const data = {
      input: {
        skillName: "Angular js"
      }
    };
    const result = await addNewSkillfunc(data);
    skillIdToDelete = result.data.addNewSkill.id;
    console.log(JSON.stringify(result, 6));
    expect(result.data).not.toBeUndefined();
    expect(result.errors).toBeUndefined();
  });
  
  test("delete existing skill", async () => {
    const data = {
      input: {
        id: skillIdToDelete
      }
    };
  
    const result = await deleteSkill(data);
    console.log(JSON.stringify(result, 6));
    expect(result.errors).toBeUndefined();
    expect(result.data).not.toBeUndefined();
    expect(result.data).not.toBeNull();
  });
  