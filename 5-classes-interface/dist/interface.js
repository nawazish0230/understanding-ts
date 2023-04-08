"use strict";
let user1;
user1 = {
    name: 'nawaz',
    age: 20,
    greet(phrase) {
        console.log(phrase + this.name);
    }
};
console.log(user1);
class Person {
    constructor(n) {
        this.age = 20;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
    ;
}
let user2;
user2 = new Person("nawaz");
user2.greet("hey there");
let add;
add = (n1, n2) => {
    return n1 + n2;
};
//# sourceMappingURL=interface.js.map