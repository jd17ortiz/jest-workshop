import greetings from "../../04-mock/greetings";
import Service from "../../04-mock/service";
jest.mock("../../04-mock/service");

describe("Greetings", function () {
  afterEach(() => {
    Service.getName.mockRestore();
  });
  it("With a fixed name", () => {
    Service.getName.mockReturnValue("Jesus");
    expect(greetings(1)).toBe("Say Hello to Jesus");
  });
});

describe("Spies", function () {
  it("Only spy on existing function", () => {
    const spy = jest.spyOn(Service, "getName");
    expect(Service.getName(1)).toBe("Jesus");
    expect(spy).toHaveBeenCalledWith(1);
  });
});
