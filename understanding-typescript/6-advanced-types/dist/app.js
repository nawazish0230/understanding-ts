"use strict";
const el = {
    name: 'nawaz',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Md', 'Nawaz');
result.split(" ");
function printEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('privileges ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate ' + emp.startDate);
    }
}
printEmployeeInfo(el);
class Car {
    drive() {
        console.log('Driving....');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck....');
    }
    loadCargo(amount) {
        console.log('loading cargo ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log(animal.type + ' Moving at speed ' + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 20 });
const userInputElement = document.getElementById("user-input");
userInputElement.value = "inserted from js";
const userInputElement2 = document.getElementById("user-input-2");
if (userInputElement2) {
    userInputElement2.value = "inserted from js 2";
}
const errorMsg = {
    email: 'Invalid email!',
    username: 'must contain 6 digit!'
};
const fetchUserData = {
    id: "u1",
    name: "Nawaz",
    job: {
        title: "CEO",
        description: "My own company"
    }
};
console.log('fetchUserData-title', fetchUserData.job.title);
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log('storedData', storedData);
//# sourceMappingURL=app.js.map