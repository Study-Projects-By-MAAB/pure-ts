// Type Narrowing - Typescript can detect types within conditional blocks
// This helps narrow down the specific type within each code branch
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 1;
}

// Type Narrowing - Using truthiness to check for null values
function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide an id");
    return;
  }
  id.toLowerCase();
}

// Type Narrowing - Using instanceof and typeof checks for array/string types
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// the in operator narrowing

// The 'in' operator helps check if a property exists in an object
// This helps narrow down object types based on their unique properties
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return false;
}

// instanceof narrowing, it is used to check if an object is an instance of a specific class or constructor function.
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// Type Predicates - A type predicate is a function that returns a boolean value indicating whether a given value satisfies a specific condition.
type Fish = { swim: () => void };
type Bird = { fly: () => void };
function isFish(pet: Fish | Bird): pet is Fish {
  // pet is Fish is a type predicate
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

// Discriminated unions - Using a common property (like 'kind') to narrow down types
// This is also known as tagged unions or algebraic data types
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

// Union type combining all possible shapes
type Shape = Circle | Square | Rectangle;

// Example of type narrowing using the 'kind' property
function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // return shape.side * shape.side;
}

// Exhaustive type checking with switch statement
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;
    default:
      // this is a type guard, it ensures that the shape variable is of type Shape
      // The never type is used to ensure all cases are handled
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
