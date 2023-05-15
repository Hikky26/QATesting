const shuffle = require("../src/shuffle");

const testArr = [1,2,3,4,5]


describe("shuffle should...", () => {
  // CODE HERE
  test('run array', () => {
    shuffleTestArr = shuffle(testArr)
    expect(Array.isArray(shuffleTestArr)).toBe(true)
  })

  test('shuffle items and not equal original array', () => {
    shuffleTestArr = shuffle(testArr)
    expect(shuffleTestArr).not.toEqual(testArr)
  })

  test('shuffle items and have same items in original array', () => {
    shuffleTestArr = shuffle(testArr)
    testArr.forEach(element => {
      expect(shuffleTestArr).toContain(element)
    });
    expect(shuffleTestArr).not.toEqual(testArr)
  })
});
