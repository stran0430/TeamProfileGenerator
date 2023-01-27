const Manager = require("../lib/Manager.js");
jest.mock("/lib/Manager.js");

test("creates manager object", () => {
  const manager = new Manager("Steve", "12", "Steve@email.com", "12341245");

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.office).toEqual(expect.any(String));
});
