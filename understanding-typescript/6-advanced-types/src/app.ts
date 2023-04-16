
// Intersection type


type Admin = {
  name: string;
  privileges: string[]
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElvatedEmployee = Admin & Employee;

// same can be achieved through interface
// interface ElvatedEmployee extends Admin, Employee { }

const el: ElvatedEmployee = {
  name: 'nawaz',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic

// function overload
function add(a: number, b: number): number;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: string, b: string): string;
// type guard
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = add('Md', 'Nawaz')
result.split(" ")

// type guard using *IN*
type UnknownEmpoyee = Employee | Admin

function printEmployeeInfo(emp: UnknownEmpoyee) {
  console.log('Name: ' + emp.name)
  if ('privileges' in emp) {
    console.log('privileges ' + emp.privileges)
  }
  if ('startDate' in emp) {
    console.log('startDate ' + emp.startDate)
  }
}

printEmployeeInfo(el)


// alternative of IN in constructor

class Car {
  drive() {
    console.log('Driving....')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck....')
  }

  loadCargo(amount: number) {
    console.log('loading cargo ' + amount)
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
}

useVehicle(v1);
useVehicle(v2)


// Discriminated Unions

interface Bird {
  type: 'bird',
  flyingSpeed: number
}

interface Horse {
  type: 'horse',
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break
    case "horse":
      speed = animal.runningSpeed;
      break
  }

  console.log(animal.type + ' Moving at speed ' + speed)
}

moveAnimal({ type: "bird", flyingSpeed: 20 })

// type casting

const userInputElement = document.getElementById("user-input")! as HTMLInputElement;
userInputElement.value = "inserted from js"

// alternate way of doing above type casting

const userInputElement2 = document.getElementById("user-input-2")
if (userInputElement2) {
  (userInputElement2 as HTMLInputElement).value = "inserted from js 2"
}


// index properties
// when we are not sure how many element would be there, then we can use
// this way, bt we can control which type of value would be stored
interface ErrorContainer { //{email: 'not valid', username: 'not valid'}
  [prop: string]: string;
}

const errorMsg: ErrorContainer = {
  email: 'Invalid email!',
  username: 'must contain 6 digit!'
}

// optional chaining
const fetchUserData = {
  id: "u1",
  name: "Nawaz",
  job: {
    title: "CEO",
    description: "My own company"
  }
}
console.log('fetchUserData-title', fetchUserData.job.title)

// nullish colestion
const userInput = undefined
const storedData = userInput ?? "DEFAULT"; // ?? only run when there is null/undefined, will not run on empty string
console.log('storedData', storedData)