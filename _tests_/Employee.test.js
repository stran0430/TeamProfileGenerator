const Employee = require("../lib/Employee.js");
jest.mock("/lib/Employee.js");

test("creates employee object", () => {
  const employee = new Employee("Ryan", "1", "Ryan@email.com");

  expect(employee.name).toBe("Ryan");
  expect(employee.id).toBe("1");
  expect(employee.email).toBe("Ryan@email.com");
});
