abstract class TakePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string
  ) {}

  abstract getSepia(): void;
  // non-abstract method can have implementation
  getReelTime(): number {
    // some complex calculation
    return 8;
  }
}

// abstract classes cannot be instantiated directly
// const hc = new TakePhoto("test", "test") // this will throw an error cause we can't instantiate an abstract class

// class that extends abstract class must implement all abstract methods
class Instagram2 extends TakePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number // we can add optional properties
  ) {
    super(cameraMode, filter); // must call super() with required parameters from parent class cause we are extending the parent class or we will get an error
  }
  // implementing the abstract method from parent class if we don't implement it we will get an error
  getSepia(): void {
    console.log("Sepia");
  }
}

// can create instance of concrete class that implements abstract class
const hc = new Instagram2("test", "test", 3);
