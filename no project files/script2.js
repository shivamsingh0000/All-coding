/**day1 file2 */

//type conversion
let number = String(2);
console.log(number, typeof(number));//converted a number into a string

let boolean = String(false);
console.log(boolean, typeof(boolean));//converted a boolean into a string

//escape  charater(\', \", \n) 
// interpolation ${} easier than concatination (refering file 1)

//booleans and if statements
console.log(3>5,typeof(3>5));
console.log(5 == '5.00'); //= used to assig value, == means equal to,
console.log(5 === '5.00');//=== to strictly check the data type as well */


//if else 
let num1 = 3;
let num2 = 4;
if(num1<num2){
  console.log(`yes ${num1} is smaller than ${num2}`)//we can add more branches by using else if
}
else{
  console.log(`${num1} is not smaller than ${num2}`)
}

//logical operators
console.log(0.2 >= 0 && 0.2 < 1/3);//AND operator
console.log(0.2 >= 0 || 0.2 < 1/3);//OR operator
console.log(!true);//NOT operator

//truthy and falsy value

if(0){
  console.log('this will not get consoled')//falsy are - 0,false,'',undefined,NaN,null
}
let noofcars = 3
if(noofcars){
  console.log("truthy")
}
else {
  console.log('falsy')
}
