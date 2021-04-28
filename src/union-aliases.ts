type Combinable = number | string;
type ConversionType = "as-number" | "as-text";

function addunion(
  n1: Combinable,
  n2: number | string,
  resultConversion: ConversionType
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result;
  //   }
}

let combinedAges = addunion(19, 19, "as-number");
console.log(combinedAges);

let combinedStringAges = addunion("19", "19", "as-text");
console.log(combinedStringAges);

let fullName = addunion("Shubh", "Agrawal", "as-text");
console.log(fullName);
