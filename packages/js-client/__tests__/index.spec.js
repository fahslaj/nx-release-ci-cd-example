const jsClient = require("../index");

describe("jsClient()", () => {
  it("should return string", () => {
    expect(jsClient()).toBe("jsClient");
  });
});
