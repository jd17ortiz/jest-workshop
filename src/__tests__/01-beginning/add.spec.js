import add from "../../01-beginning/add";

describe("Add Numbers", function () {
    it("Returns the argument if only one number is provided", () => {
        expect(add(1)).toBe(1);
    });

    it("Throws an error if arguments are not numbers", () => {
        expect(() => {
            add("test");
        }).toThrow();
    });

    it("Throws an error if no arguments are passed", () => {
    expect(() => add()).toThrow();
    });
});

