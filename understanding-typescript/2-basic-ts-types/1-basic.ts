function add(n1: number, n2: number, showResult: Boolean, phrase: string) {
  let result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 8;
const number2 = 6;
const printResult = true;
const resultPhrase = "Result is :";

add(number1, number2, printResult, resultPhrase);
