class Department {
  private employees: string[] = [];
  static fiscalYear = 2021;

  //shorthand to creating and init the props using constructor
  constructor(private readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  //this can be passed as an argument in function with a type
  describe(this: Department) {
    console.log(
      `Department ${this.id}: ${this.name} , year: ${Department.fiscalYear}`
    );
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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("PLease pass a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Shubh");
console.log(employee1);

const it = new ITDepartment("d1", ["Shubh"]);
it.addEmployee("Shubh");
it.addEmployee("Jam");

it.describe();
it.printEmployeeInfo();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "Next report is here";
accounting.addReport("Here is my report...");
accounting.printReports();
console.log(accounting.mostRecentReport);
