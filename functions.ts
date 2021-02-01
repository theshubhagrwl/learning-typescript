function add(n1: number, n2: number) {
  return n1 + n2;
}

function addnhandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

//This is Function Type
let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(8, 8));

addnhandle(12, 20, (r) => {
  console.log(r);
});
