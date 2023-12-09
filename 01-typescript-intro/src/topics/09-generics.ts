export function whatsMyType<T>(arg: T): T {
  return arg;
}

const myString = whatsMyType("Hello World");
const myNumber = whatsMyType(1);
const myBoolean = whatsMyType(true);

console.log(myString.split(''));
console.log(myNumber.toFixed(2));
console.log(myBoolean.valueOf());
