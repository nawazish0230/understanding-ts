"use strict";
const names = ["john"];
names[0].split("");
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise resolved");
    }, 1000);
});
promise.then((data) => {
    data.split("");
});
function merge1(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const mergedObj1 = merge1({ name: 'nawaz' }, { age: 10 });
mergedObj1.name;
function merge2(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const mergedObj2 = merge2({ name: 'nawaz', hobbies: ['playing'] }, { age: 10 });
console.log('mergedObj2', mergedObj2);
function countAndDescribe(element) {
    let descriptionValue = 'Got no value';
    if (element.length === 1)
        descriptionValue = "Got 1 element";
    if (element.length > 1)
        descriptionValue = "Got " + element.length + " elements";
    return [element, descriptionValue];
}
console.log('countAndDescribe', countAndDescribe("hey there"));
function extractAndConvert(obj, key) {
    return 'Value ' + obj[key];
}
console.log('extractAndConvert', extractAndConvert({ name: "nawazish" }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('md');
textStorage.addItem('nawaz');
textStorage.removeItem('md');
console.log('generics classes', textStorage.getItems());
const numberStorage = new DataStorage();
function createGoalCourse(title, description, completion) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completion = completion;
    return courseGoal;
}
const readonlyNames = ["john", "doe"];
class DataStorage2 {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
}
//# sourceMappingURL=app.js.map