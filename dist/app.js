"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    //this can be passed as an argument in function with a type
    describe() {
        console.log("Department: " + this.name);
    }
}
const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
//This gives an error cause we have passed Department as type in describe function
// const accountingCopy = { describe: accounting.describe };
//This will work as there is a name prop inside it which is same as Department
const accountingCopy = { name: "Shubh", describe: accounting.describe };
accountingCopy.describe();
