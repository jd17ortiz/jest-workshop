import greetings from "../../05-async/greetings";
jest.mock("../../05-async/request-async");

describe("Greetings Promise", function () {
  it("Using resolve", () => {
    expect.assertions(1);
    return expect(greetings(1)).resolves.toEqual({ id: 1, name: "Ben" });
  });

  it("Using then", async () => {
    expect.assertions(1);
    const res = await greetings(2);
    return expect(res.name).toEqual("Anna");
  });

  it("Using reject", () => {
    expect.assertions(1);
    return expect(greetings(9)).rejects.toEqual("User with 9 not found.");
  });
});
