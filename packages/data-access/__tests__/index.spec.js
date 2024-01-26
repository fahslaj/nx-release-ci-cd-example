const dataAccess = require("../index");

describe("dataAccess()", () => {
  it("should return string", () => {
    expect(dataAccess()).toBe("dataAccess");
  });
});
