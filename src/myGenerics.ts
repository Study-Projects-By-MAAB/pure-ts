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
