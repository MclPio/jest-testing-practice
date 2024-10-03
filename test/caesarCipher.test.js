import { describe, it, expect } from "@jest/globals";
import { caesarCipher, alphabet } from "../caesarCipher";

describe("caesarCipher", () => {
  it("exists", () => {
    expect(caesarCipher).toBeDefined();
  });

  describe("given a valid letter", () => {
    test("it shifts lower case letters by 2", () => {
      expect(caesarCipher("c", 2)).toBe("e");
      expect(caesarCipher("f", 2)).toBe("h");
      expect(caesarCipher("z", 2)).toBe("b");
    });

    test("it shifts lower case letters by 312", () => {
      expect(caesarCipher("a", 312)).toBe("a");
      expect(caesarCipher("a", 314)).toBe("c");
    });
  });

  describe("given lower case string", () => {
    test("it shifts xyz by a factor of 3", () => {
      expect(caesarCipher("xyz", 3)).toBe("abc");
    });
  });

  describe("given lower case and upper case string", () => {
    it("shifts HeLLo by 3 and keeps original lettercase", () => {
      expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    });
  });

  describe("given alphabet and unique characters", () => {
    it("does not change non alphabet characters", () => {
      expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    });
  });
});

describe("generate alphabet array", () => {
  test("returns [a,..,z]", () => {
    expect(alphabet()).toContain("a");
    expect(alphabet()).toContain("z");
    expect(alphabet()).toHaveLength(26);
  });
});
