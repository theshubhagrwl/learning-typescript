"use strict";
function addfn(n1, n2) {
    return n1 + n2;
}
function addnhandle(n3, n4, cb) {
    const result = n3 + n4;
    cb(result);
}
//This is Function Type
let combinedValues;
combinedValues = addfn;
console.log(combinedValues(8, 8));
addnhandle(12, 20, (r) => {
    console.log(r);
});
