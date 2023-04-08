"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
        console.log('fiscalYear', Department.fiscalYear);
    }
    addEmployee(name) {
        if (name === "lucky") {
            return;
        }
        this.employees.push(name);
    }
    getEmployees() {
        console.log(this.employees);
        console.log(this.employees.length);
    }
}
Department.fiscalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    static getInstance() {
        if (ITDepartment.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment("d1", ["Lucky"]);
        return this.instance;
    }
}
class AccountDepartment extends Department {
    constructor(id, reports) {
        super(id, "Account");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("last report not found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Field required");
        }
        this.lastReport = value;
    }
    addReports(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReports() {
        console.log("reports", this.reports);
    }
}
const employee1 = Department.createEmployee("static employee");
console.log('employee1', employee1);
console.log('fiscalYear', Department.fiscalYear);
const ITDept = ITDepartment.getInstance();
const ITDept2 = ITDepartment.getInstance();
console.log('ITDept & ITDept2 would be equal', ITDept, ITDept2);
ITDept.describe();
ITDept.addEmployee("luckys");
ITDept.addEmployee("nawaz");
ITDept.name = "department title";
ITDept.getEmployees();
console.log('ITDept', ITDept);
const accountDept = new AccountDepartment("d2", []);
accountDept.addReports("first report");
console.log('reports', accountDept.mostRecentReport);
console.log("Setter", accountDept.mostRecentReport = 'year end report');
accountDept.printReports();
console.log('accountDept', accountDept);
accountDept.addEmployee("lucky");
accountDept.addEmployee("kevin");
//# sourceMappingURL=classes.js.map