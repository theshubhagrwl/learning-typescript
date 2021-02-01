function add(n1, n2, resultConversion) {
    var result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
    //   if (resultConversion === "as-number") {
    //     return +result;
    //   } else {
    //     return result;
    //   }
}
var combinedAges = add(19, 19, "as-number");
console.log(combinedAges);
var combinedStringAges = add("19", "19", "as-text");
console.log(combinedStringAges);
var fullName = add("Shubh", "Agrawal", "as-text");
console.log(fullName);
