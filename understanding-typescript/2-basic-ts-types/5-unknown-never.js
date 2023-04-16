// -> unknown type
var userInput;
var userName;
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
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occured", 500);
console.log(result);
