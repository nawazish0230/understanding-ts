function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1;
number1 = 8;
var number2 = 6;
var printResult = true;
var resultPhrase = "Result is :";
add(number1, number2, printResult, resultPhrase);
