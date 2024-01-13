const sum = require("./index");

describe("Testing Sum func", () => {
  test("sum of two positive number", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("sum of two negative number", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test("sum of two floating number", () => {
    expect(sum(1.3, 2.3)).toBe(3.6);
  });

  test("sum of two floating number where output is an Integer", () => {
    expect(sum(2.5, 1.5)).toBe(4);
  });

  test("sum of two number as String where output is an Integer", () => {
    expect(sum("1.5", "1.5")).toBe(3);
  });

  test("call the sum with no arguments", () => {
    expect(sum()).toBe("Sum function invoked without arguments");
  });

  test("call the sum with one arguments", () => {
    expect(sum(2)).toBe("Sum function need atleast 2 arguments");
  });

  test("Add 3 number", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });

  test("Add 4 number", () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });
});
