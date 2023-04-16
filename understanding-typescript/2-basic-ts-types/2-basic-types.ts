// object, array, enum

// tuples -> [1, 2] array with fix length as well as fix type
// enum -> enum {new, old} -> automatically enumerated global constant identifiers
// any -> we can assign any value on it and basically it takes away everything all the benefit of javascript

// enum -> automatically increment value for the next item
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 5,
  AUTHOR,
}

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   skills: [number, string]; //tuples
// } = {
const person = {
  name: "Nawazish",
  age: 24,
  hobbies: ["sports", "cooking"],
  skills: [2, "javascript"],
  role: Role.AUTHOR,
};

console.log('role', person.role)
// person.skills.push("admin"); -> not able to point this error
// person.skills[1] = 1; -> giving error as need string only at second place
// person.skills = [1, 'admin', 'user'] -> this also gives eror as we have asigned the fixed length

// array
let favouriteSports: string[];
favouriteSports = ["cricket"];

console.log(person);
for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map); giving error as we cant use map on string
}

// enums
if (person.role === Role.AUTHOR) {
  console.log("is author");
}
