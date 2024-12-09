// Interface defines a contract for objects that can take photos
// Any class implementing this must have these exact properties
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

// Classes implementing this must have the createStory method
interface Story {
  createStory(): void;
}

// Instagram class implements TakePhoto interface
// Using public in constructor parameters automatically creates and assigns class properties
// This is a TypeScript shorthand for property declaration and assignment
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

// Youtube class implements multiple interfaces: TakePhoto and Story
// This demonstrates interface segregation - a class can implement multiple interfaces
// The class must fulfill all requirements from both interfaces
// Added 'short' as an extra property specific to Youtube class
class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}
  createStory(): void {
    console.log("Story created");
  }
}

// Key Learning Points:
// 1. Interfaces define contracts that classes must follow
// 2. Multiple interface implementation is possible
// 3. Constructor parameter properties (public keyword usage)
// 4. Interface segregation principle
// 5. Classes can add extra properties beyond interface requirements