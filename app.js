//Using global variables for assigning roles
// const ADMIN = 0;
// const AUTHOR = 1;
//ADMIN receives 0 and AUTHOR 1
var Role;
(function (Role) {
    Role["ADMIN"] = "Authro";
    Role[Role["AUTHOR"] = void 0] = "AUTHOR";
})(Role || (Role = {}));
//Here TypeScript automatically infers the type
var person = {
    name: "Shubh",
    age: 19,
    hobbies: ["Reading", "Programming"],
    role: Role.ADMIN
};
//Here we are explicitly declaring the type
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Shubh",
//   age: 19,
// };
console.log(person.name, person.role);
