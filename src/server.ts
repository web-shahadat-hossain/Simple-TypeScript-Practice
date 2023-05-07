// TypeScript tuple

// ****1
const userInfo: [number, string, string, boolean, string] = [
  101,
  "Ema",
  "John",
  true,
  "2023",
];

// console.log(userInfo);

// ****2
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

// console.log(getCommonElements([1, 4], [1, 5]));

// ****3
// You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

interface IProduct {
  name: string;
  id: number;
  price: number;
  category: string;
}

const product = <T, U extends keyof T>(
  productInfo: T[],
  criterion: U,
  value: T[U]
): T[] => {
  return productInfo.filter((info) => info[criterion] === value);
};

const products: IProduct[] = [
  {
    name: "Ti Shirt",
    id: 1,
    price: 23,
    category: "Shirt",
  },
  {
    name: "Ti Shirt",
    id: 2,
    price: 10,
    category: "Shirt",
  },
  {
    name: "panjabi",
    id: 3,
    price: 23,
    category: "panjabi",
  },
  {
    name: "new panjabi",
    id: 4,
    price: 25,
    category: "panjabi",
  },
];

const result = product(products, "price", 23);
// console.log(result);

// ****4

// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type tupleArrayOfProduct = [string, number, number];

type myProductsType = tupleArrayOfProduct[];

const calculatesTotalCost = <T extends tupleArrayOfProduct>(products: T[]) => {
  let totalCost = 0;
  for (let product of products) {
    const [, price, quantity] = product;
    totalCost += price * quantity;
  }
  return totalCost;
};

const myProducts: myProductsType = [
  ["t-shirt", 300, 2],
  ["Punjabi", 500, 2],
];

const result4 = calculatesTotalCost(myProducts);
// console.log(result4);

// ****5
// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

const evenNumberSum = (numberArray: number[]) => {
  let eventTotal = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      eventTotal += numberArray[i];
    }
  }
  return eventTotal;
};

const evenAndOddNumberArray: number[] = [10, 9, 4, 3, 6];
const result5 = evenNumberSum(evenAndOddNumberArray);

// ****6
// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the odd numbers in the array. How would you approach this problem and write code to solve it?

const findOddNumber = (oddNumber: number[]): number[] => {
  return oddNumber.filter((odd) => odd % 2 !== 0);
};

const oddAndOddNumberArray: number[] = [10, 9, 4, 3, 6];
const result6 = findOddNumber(oddAndOddNumberArray);

// console.log(result6);

// ****7
// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.
interface IPerson {
  name: string;
  age: number;
  email: string;
}

const findFriend = <T extends IPerson>(friend: T[], email: string) => {
  for (let bestFriend of friend) {
    // console.log(bestFriend.email);
    if (bestFriend.email === email) {
      return bestFriend;
    }
  }
  return "no match is found.";
};

const friends: IPerson[] = [
  {
    name: "Md Shahadat Hossain",
    age: 18,
    email: "shahadat@gmail.com",
  },
  {
    name: "Md Masum Billa",
    age: 18,
    email: "masum@gmail.com",
  },
  {
    name: "Md Abu Taher",
    age: 18,
    email: "taher@gmail.com",
  },
];

const result8 = findFriend(friends, "masum@gmail.com");
console.log(result8);
