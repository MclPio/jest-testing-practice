import { describe, it, expect } from "@jest/globals";
import { analyzeArray } from "../analyzeArray";

describe("analyzeArray", () => {
  it("exists", () => {
    expect(analyzeArray).toBeDefined();
  });

  describe("takes an array of numbers", () => {
    it("returns an object", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      });
    });

    it("returns an object with new numbers", () => {
      expect(analyzeArray([1, 2, 3, 4])).toMatchObject({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4,
      });
    });
  });

  describe("it does not throw error", () => {
    test("invalid object", () => {
      expect(() => {
        analyzeArray("HEY");
      }).not.toThrowError();

      expect(() => {
        analyzeArray();
      }).not.toThrowError();
    });
  });
});
