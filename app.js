function add(n1, n2, showResult, phrase) {
    if (showResult) {
        var result = n1 + n2;
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var num1 = 5;
var num2 = 1.9;
var showResult = true;
var phrase = "Result is ";
add(num1, num2, showResult, phrase);
