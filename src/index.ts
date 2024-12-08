// console.log("typescript is working");
// console.log("typescript is amazing");

// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Delhi";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city; // this is allowed because city is in the constructor
//   }
// }

/* typescript user like most this way: */
// class User {
//   constructor(
//     public email: string,
//     public name: string,
//     // private userId: string
//   ) {}
// }

/* Getters and Setters */
class User {
  protected _courseCount = 1;

  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}

  private deleteToken() {
    console.log("Token Deleted");
  }

  // Getters: getters are used to get the value of a private variable, they return the value of the private variable
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // Setters: setters are used to set the value of a private variable, they don't return anything
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4; // this is allowed if _courseCount is public or protected. if it is private, it will throw an error
  }
}

const hitesh = new User("h@h.com", "hitesh");
// hitesh.city = "Mumbai"; // error because city is readonly
// hitesh.city; // error because city is private
