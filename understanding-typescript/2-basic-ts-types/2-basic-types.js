// tuples -> [1, 2] array with fix length as well as fix type
// enum -> enum {new, old} -> automatically enumerated global constant identifiers
// any -> we can assign any value on it and basically it takes away everything all the benefit of javascript
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
    Role[Role["AUTHOR"] = 6] = "AUTHOR";
})(Role || (Role = {}));
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   skills: [number, string]; //tuples
// } = {
var person = {
    name: "Nawazish",
    age: 24,
    hobbies: ["sports", "cooking"],
    skills: [2, "javascript"],
    role: Role.AUTHOR
};
console.log('role', person.role);
// person.skills.push("admin"); -> not able to point this error
// person.skills[1] = 1; -> giving error as need string only at second place
// person.skills = [1, 'admin', 'user'] -> this also gives eror as we have asigned the fixed length
// array
var favouriteSports;
favouriteSports = ["cricket"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map); giving error as we cant use map on string
}
// enums
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
