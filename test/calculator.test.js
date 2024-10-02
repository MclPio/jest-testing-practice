import { calculator } from "../calculator";

describe("calculator", () => {
  it("exists", () => {
    expect(require("../calculator")).toBeDefined();
  });
  test("addition", () => {
    expect(calculator.add(1, 3)).toEqual(4);
    expect(calculator.add(1, 1)).toEqual(2);
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test("subtract", () => {
    expect(calculator.subtract(1, 3)).toEqual(-2);
    expect(calculator.subtract(1, 1)).toEqual(0);
    expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
  });

  test("multiply", () => {
    expect(calculator.multiply(1, 3)).toEqual(3);
    expect(calculator.multiply(1, 1)).toEqual(1);
    expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });

  describe("divide", () => {
    it("divides 10 by 2 to equal 5", () => {
      expect(calculator.divide(10, 2)).toEqual(5);
    });

    it("divides 1 by 10 to equal 0.1", () => {
      expect(calculator.divide(1, 10)).toEqual(0.1);
    });

    it("divides -5 by -2 to be qual to 2.5", () => {
      expect(calculator.divide(-5, -2)).toEqual(2.5);
    });
  });
});
