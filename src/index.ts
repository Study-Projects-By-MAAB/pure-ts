// console.log("typescript is working");
// console.log("typescript is amazing");

class User {
  email: string;
  name: string;
  readonly city: string = "Delhi";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const hitesh = new User("h@h.com", "hitesh");
// hitesh.city = "Mumbai"; // error


