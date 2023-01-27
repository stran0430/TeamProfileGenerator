const Engineer = require("../lib/Engineer.js");
jest.mock("/lib/Engineer.js");

test("creates engineer object", () => {
  const engineer = new Engineer(
    "Riley",
    "1234",
    "riley@email.com",
    "rileygithub"
  );

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});
