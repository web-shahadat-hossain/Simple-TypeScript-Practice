// TypeScript tuple

const userInfo: [number, string, string, boolean, string] = [
  101,
  "Ema",
  "John",
  true,
  "2023",
];

// console.log(userInfo);

// Common Elements in array
const getCommonElements = (
  numberArray1: number[],
  numberArray2: number[]
): number[] => {
  const commonElements: number[] = [];

  for (let num1 of numberArray1) {
    // console.log(num1);
    if (numberArray2.includes(num1)) {
      commonElements.push(num1);
    }
  }

  return commonElements;
};

console.log(getCommonElements([1, 4], [1, 5]));
