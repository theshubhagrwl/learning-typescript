//Here TypeScript automatically infers the type
const person = {
  name: "Shubh",
  age: 19,
  hobbies: ["Reading", "Programming"],
};

//Here we are explicitly declaring the type
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Shubh",
//   age: 19,
// };
console.log(person.name);
