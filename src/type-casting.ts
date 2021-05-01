//Method 1
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!

// Method 2
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

//If you are not using ! then
// const userInputElement = document.getElementById('user-input');
// if(userInputElement){
//     (userInputElement as HTMLInputElement).value = 'Hi there'
// }

userInputElement.value = "Hello";
