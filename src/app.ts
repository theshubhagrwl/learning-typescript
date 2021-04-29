class Department {
  //   name: string;
  private employees: string[] = [];

  //   constructor(n: string) {
  //     this.name = n;
  //   }

  //shorthand to creating and init the props using constructor
  constructor(private readonly id: string, public name: string) {
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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "IT");
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Shubh"]);
it.addEmployee("Shubh");
it.addEmployee("Jam");

it.describe();
it.printEmployeeInfo();

console.log(it);

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Something went wrong...");
accounting.printReports();

//This gives an error cause we have passed Department as type in describe function
// const accountingCopy = { describe: accounting.describe };
//This will work as there is a name prop inside it which is same as Department
// const accountingCopy = { name: "Shubh", describe: accounting.describe };
// accountingCopy.describe();
