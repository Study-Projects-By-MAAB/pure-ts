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


// typescript user like most this way:
class User {
  constructor(
    public email: string,
    public name: string,
    // private userId: string
  ) {}
}

const hitesh = new User("h@h.com", "hitesh");
// hitesh.city = "Mumbai"; // error because city is readonly
// hitesh.city; // error because city is private
