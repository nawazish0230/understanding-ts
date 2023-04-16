// -> unknown type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// we can't assign unknown value to string type
// but we can assign any type to string type
// userName = userInput;
if (typeof userInput === "string") {
  userName = userInput;
}

// it is better than any

// -> never -> function never return any value;
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
const result = generateError("An error occured", 500);
console.log(result);
