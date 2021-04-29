class Department {
  //   name: string;
  private employees: string[] = [];

  //   constructor(n: string) {
  //     this.name = n;
  //   }

  //shorthand to creating and init the props using constructor
  constructor(private id: string, public name: string) {
    //     this.name = n;
  }

  //this can be passed as an argument in function with a type
  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");
accounting.addEmployee("Shubh");
accounting.addEmployee("Jam");

accounting.describe();
accounting.printEmployeeInfo();

//This gives an error cause we have passed Department as type in describe function
// const accountingCopy = { describe: accounting.describe };
//This will work as there is a name prop inside it which is same as Department
// const accountingCopy = { name: "Shubh", describe: accounting.describe };
// accountingCopy.describe();
