interface Greetable {
  name: string;
  age: number;

  greet(phrase: string): void;
}

//An interface can be used with Class
class Person implements Greetable {
  name: string;
  age = 30;

  constructor(str: string) {
    this.name = str;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = {
  name: "Shubh",
  age: 19,
  greet(phrase: string) {
    console.log(phrase);
  },
};

user1.greet("Namaste");

//It works both ways
let user2 = new Person("SHUBH");
console.log(user1);
console.log(user2);

//Interface as function types

// type AddFn = (a:number, b:number) => number
interface AddFn {
  (a: number, b: number): number; //kind of anonymous function
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
