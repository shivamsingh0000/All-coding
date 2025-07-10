//day1 file3

/**
* Shortcuts for if else statements
* -ternary operator?:
* -Guard operator &&
* -Default operator ||


//-ternary operator?:
const result = 9 ? "truthy" : "falsy";
console.log(result)


//-Guard operator && and -Default operator
//stops early
const result2 = 5 && console.log("hello");
console.log(result2)*/

//Functions
function function1(A,B) {
  console.log(A + B)
}

//function1(2,7);

//object
const product = {
  name : "t shirt",
  price : (150)+'rs'//property value pair
};
//console.log(product.price);//dot notation
console.log(product['price']);//bracket notation

//objects can be defined even inside another objects
const product2 = {
  newproduct : "tables",
  oldproducts : {product},
};
console.log(product2);
//a function can also be store as an object value
const product3 = {
  soldproducts : function sold(){
    console.log('these are sold products')
  }
};

//we can call it by
product3.soldproducts();//this is called method

