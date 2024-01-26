const requestSubmission = require("../index");

describe("requestSubmission()", () => {
  it("should return string", () => {
    expect(requestSubmission()).toBe("requestSubmission");
  });
});
