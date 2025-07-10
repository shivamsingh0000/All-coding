/**day 1 */

//alert("hello world");//alert
console.log(25-50);

// 1. Number
let age = 25;
console.log("Number:", age, typeof age);

// 2. String
let name = "Shivam";
console.log("String:", name, typeof name);

// 3. Boolean
let isStudent = true;
console.log("Boolean:", isStudent, typeof isStudent);

// 4. Undefined
let address;
console.log("Undefined:", address, typeof address);

// 5. Null (typeof is 'object' — JS quirk)
let empty = null;
console.log("Null:", empty, typeof empty);

// 6. BigInt (for large integers)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber, typeof bigNumber);

// 7. Symbol (unique and immutable)
let id = Symbol("id");
console.log("Symbol:", id, typeof id);

// 8. Object
let person = { name: "Ishu", age: 18 };
console.log("Object:", person, typeof person);

// 9. Array (special kind of object)
let colors = ["red", "green", "blue"];
console.log("Array:", colors, typeof colors);

// 10. Function
function greet() {
  return "Hello!";
}
console.log("Function:", greet, typeof greet);

//--

console.log('something'+'is'+'wierd')//concatination

//type conversion is in another file--😎
