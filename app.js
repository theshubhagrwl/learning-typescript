function add(n1, n2) {
    return n1 + n2;
}
function addnhandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combinedValues;
combinedValues = add;
console.log(combinedValues(8, 8));
addnhandle(12, 20, function (r) {
    console.log(r);
});
