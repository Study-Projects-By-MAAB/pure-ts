// Array
const score: Array<number> = [];
const names: Array<string> = [];

// Basic Generic Function
function identityOne(val: boolean | number): boolean | number {
  return val;
}

// Any Type - Loses type information, not recommended
function identityTwo(val: any): any {
  return val;
}

// Generic Type - Preserves type information,
function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(true)

// Shorthand Generic Type
function identityFour<T>(val: T): T {
  return val;
}

// Interface with Generic
interface Bootle {
  brand: string;
  type: number;
}

// Using Generic with Interface
identityFour<Bootle>({ brand: "string", type: 1 });

// Generic Array and function
function getSearchProducts<T>(products: T[]): T {
  // do some database operation
  const myProduct = 10;
  return products[myProduct];
}

const getMoreSearchProducts = <T>(products: T[]): T => {// comma is for show that it's a generic.
  // do some database operation
  const myProduct = 2;
  return products[2];
};
