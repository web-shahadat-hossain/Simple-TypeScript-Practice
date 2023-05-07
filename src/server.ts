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

// console.log(getCommonElements([1, 4], [1, 5]));

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

// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type tupleArrayOfProduct = [string, number, number];

type myProductsType = tupleArrayOfProduct[];

const calculatesTotalCost = <T extends tupleArrayOfProduct>(products: T[]) => {
  let totalCost = 0;
  for (let product of products) {
    const [, price, quantity] = product;
    console.log(quantity);
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
