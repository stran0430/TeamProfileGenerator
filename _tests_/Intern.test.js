const Intern = require("../lib/Intern.js");
jest.mock("/lib/Intern.js");

test("creates intern object", () => {
  const intern = new Intern(
    "Logan",
    "5555",
    "Logan@email.com",
    "Georgia Tech University"
  );

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});
