class Department {
  static fiscalYear = 2023;

  // private id: string;
  // private name: string;
  // private employees: string[] = [];
  protected employees: string[] = [];

  // private -> only accesible in this class, not outside nor on the extended version of class
  // protected -> accesible in this class and on the extended version of class not from outside

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  // static method -> it can be called without instantiating the class outside the class and cant be accessed inside class 
  static createEmployee(name: string) {
    return { name: name }
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);

    // to access static method inside class, we can use like this
    console.log('fiscalYear', Department.fiscalYear)
  }

  addEmployee(name: string) {
    if (name === "lucky") {
      return
    }
    this.employees.push(name);
  }

  getEmployees() {
    console.log(this.employees);
    console.log(this.employees.length);
  }
}

// it department
class ITDepartment extends Department {
  admins: string[];
  private static instance: ITDepartment //private cons

  // private constructor -> (singleton method) -> it ensures we can't able to 
  // call ITDepartment two times as it should be called only once
  private constructor(id: string, admins: string[]) {
    super(id, "IT")
    this.admins = admins
  }

  // creating private const. -> this will ensure that IT dep. can be called only once
  static getInstance() {
    if (ITDepartment.instance) {
      return this.instance
    }
    this.instance = new ITDepartment("d1", ["Lucky"]);
    return this.instance
  }
}

// account department
class AccountDepartment extends Department {
  reports: string[];
  private lastReport: string;

  // getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error("last report not found")
  }

  // setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Field required")
    }
    this.lastReport = value
  }

  constructor(id: string, reports: string[]) {
    super(id, "Account")
    this.reports = reports
    this.lastReport = reports[0]
  }

  addReports(report: string) {
    this.reports.push(report)
    this.lastReport = report
  }

  printReports() {
    console.log("reports", this.reports)
  }
}

// calling static method -> with instantiating the class ex-> Math.pow(2)
const employee1 = Department.createEmployee("static employee")
console.log('employee1', employee1)
console.log('fiscalYear', Department.fiscalYear)

// const ITDept = new ITDepartment("d1", ["Lucky"]);

// private constructor way of calling
const ITDept = ITDepartment.getInstance()
const ITDept2 = ITDepartment.getInstance()

console.log('ITDept & ITDept2 would be equal', ITDept, ITDept2)

ITDept.describe();

ITDept.addEmployee("luckys");
ITDept.addEmployee("nawaz");

ITDept.name = "department title"
// to avoid adding/accesing employees from outside..we need to add private
// accounting.employees[2] = 'new employee'

ITDept.getEmployees();

console.log('ITDept', ITDept)

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();

const accountDept = new AccountDepartment("d2", [])

// accountDept.mostRecentReport; //getting error as not report added

accountDept.addReports("first report")

// called getter
console.log('reports', accountDept.mostRecentReport)

// calling setter
console.log("Setter", accountDept.mostRecentReport = 'year end report')

accountDept.printReports()

console.log('accountDept', accountDept)

accountDept.addEmployee("lucky")
accountDept.addEmployee("kevin")



