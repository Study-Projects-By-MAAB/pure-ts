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

const getMoreSearchProducts = <T>(products: T[]): T => {
  // comma is for show that it's a generic.
  // do some database operation
  const myProduct = 2;
  return products[2];
};

// Generic Class - A class that can work with different types while maintaining type safety
// T is a type parameter that can be specified when creating an instance of the class
// This allows for flexible and reusable class implementations
function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}

// anotherFunction("df", '3'); // got error cause we set U to be number

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction2<T, U extends Database>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}

anotherFunction2(2, {
  connection: "something...",
  username: "anyName",
  password: "password...",
});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

// Example of a Generic Class implementation
// T can be any type (Quiz, Course, etc.)
// This makes the cart flexible to store different types of items if we want to add another types of items(like clothes, shoes, etc.)
class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
