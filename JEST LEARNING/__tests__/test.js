describe("toBe or not.toBe", () => {
  test("3 is 3 ", () => {
    expect(3).toBe(3);
  });

  test("boolean value ", () => {
    expect(true).toBe(true);
    expect(false).toBe(false);
    expect(true).not.toBe(false);
  });
});

describe("Tests for reference data type", () => {
  test("{} !== {}", () => {
    expect({}).not.toBe({});
  });

  test("[]== []", () => {
    expect([]).not.toBe([]);
  });

  test("Objecta === Object b", () => {
    // if both object have same reference then only it can be true
    let a = {};
    expect(a).toBe(a);
  });
});

describe("toEqual", () => {
  test("[] is equal to []", () => {
    expect([]).toEqual([]);
  });

  test("[1,2,3] to not equal  []", () => {
    expect([1, 2, 3]).not.toEqual([]);
  });

  test("[1,2,3] to not equal  [1,2,3]", () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });

  test("[1,2,[3,4]] to not equal  [1,2,[3,4]]", () => {
    expect([1, 2, [3, 4]]).toEqual([1, 2, [3, 4]]);
  });

  test("nested arrays", () => {
    let a = [1, 2, 3];
    let b = [a, a];
    let c = [[1, 2, 3], a];
    expect(b).toEqual(c);
  });
});

describe("test relational operators", () => {
  test("100+100 <= 200", () => {
    expect(100 + 100).toBeLessThanOrEqual(200);
  });
  test("100+100 < 200", () => {
    expect(100 + 100).toBeLessThan(201);
  });
  test("100+100 >= 200", () => {
    expect(100 + 100).toBeGreaterThanOrEqual(200);
  });
});
