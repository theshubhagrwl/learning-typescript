const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done...");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

//This says that T can be any type of object
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
//TS infers the type when the function is called

//This works because we haven't specified any specific type for T and U
const mergeObj = merge({ name: "Shubh" }, 19);
//Here we have specified that T and U should be objects
const mergeObj2 = merge2({ name: "Shubh" }, { age: 19 });
console.log(mergeObj);

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("H"));
console.log(countAndDescribe("Hi there"));
console.log(countAndDescribe(["Hi there", "Hello"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value " + obj[key];
}
console.log(extractAndConvert({ name: "shubh" }, "name"));

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Shubh");
textStorage.addItem("Max");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
