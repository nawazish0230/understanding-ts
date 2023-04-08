// interface and type are same bt interface is more specific for defining type
// and it also helps to apply union type

// 

interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'nawaz',
  age: 20,
  greet(phrase: string) {
    console.log(phrase + this.name)
  }
}
console.log(user1)

// *****

interface Named {
  readonly name: string;
  outputName?: string;
}

interface Greetable extends Named {
  // readonly name: string;
  age: number;

  greet(phrase: string): void;
}

// implments forces to have at least same format of greetable and 
// further more porperty can be added also
class Person implements Greetable {
  name: string;
  age = 20;

  constructor(n: string) {
    this.name = n
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  };
}

let user2: Greetable;
user2 = new Person("nawaz")
user2.greet("hey there")



// assigning interface to function.
// type AddFn = { a: number, b: number }=> number //type alternative
interface AddFn {
  (a: number, b: number): number
}
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2
}