import { reverseString } from "../reverseString";

describe("reverseString", () => {
  test("should exist", () => {
    expect(require("../reverseString")).toBeDefined();
  });
  test("it reverses string", () => {
    expect(reverseString("string")).toBe("gnirts");
    expect(reverseString("apple")).toBe("elppa");
    expect(reverseString("non")).toBe("non");
    expect(reverseString("Greetings from Earth")).toBe("htraE morf sgniteerG");
  });
});
