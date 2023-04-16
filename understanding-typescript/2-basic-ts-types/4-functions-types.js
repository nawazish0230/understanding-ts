// 1) function return type -> basically ts automatically assign the type which would be returned
// 2) function types -> it describes the types of function regarding parameter and return value
function add(n1, n2) {
    var result = n1 + n2;
    return result;
}
// if we dont return any value then void would be returned
function printResult(num) {
    console.log("Result " + num);
}
printResult(add(5, 7));
// 3) here we are describing the type of paramter and return type as well
var combineValues;
combineValues = add;
// combineValues = printResult its throw error
console.log(combineValues(8, 8));
// function callback -> here we specified that return type would be void so if we return anything that is not valid
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log("cb function " + result);
});
