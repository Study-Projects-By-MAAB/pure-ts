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
