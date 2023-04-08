// union type - if we want to accept two different value on same constant
// variable or paramter of function then we can use union type
function combinedAges(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combinedAges(5, 60, "as-number"));
console.log(combinedAges(5, 60, "as-string"));
console.log(combinedAges("Md", " Nawazish", "as-string"));
