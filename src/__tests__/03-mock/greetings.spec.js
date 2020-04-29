import greetings from "../../03-mock/greetings";
import Service from "../../03-mock/service";
jest.mock("../../03-mock/service");

describe("Greetings", function () {
  it("With auto mock name", () => {
    let actual = greetings(1);
    expect(actual).toBe("Say Hello to Administrator");
  });
});
