function addfn(n1: number, n2: number) {
  return n1 + n2;
}

function addnhandle(n3: number, n4: number, cb: (num: number) => void) {
  const result = n3 + n4;
  cb(result);
}

//This is Function Type
let combinedValues: (a: number, b: number) => number;

combinedValues = addfn;

console.log(combinedValues(8, 8));

addnhandle(12, 20, (r) => {
  console.log(r);
});
