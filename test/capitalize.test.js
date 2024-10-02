import { capitalize } from "../capitalize";

test("it capitalizes first character", () => {
  expect(capitalize("flies")).toBe("Flies");
  expect(capitalize("door")).toBe("Door");
  expect(capitalize("window")).toBe("Window");
});
