// union type - if we want to accept two different value on same constant
// variable or paramter of function then we can use union type

// literal types -> if we want to store any specific value only

// type alias / custom types -> of we want to store some type in it example: input1: (number | string)
// or we can say that we can store union type in type alias

type Combinable = number | string; 

function combinedAges(
  input1: Combinable,
  input2: Combinable,
  resultConversion: "as-number" | "as-string"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combinedAges(5, 60, "as-number"));
console.log(combinedAges(5, 60, "as-string"));
console.log(combinedAges("Md", " Nawazish", "as-string"));
