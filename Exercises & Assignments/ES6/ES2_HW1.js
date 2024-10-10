//Program 1
const areaOfRectangle = (a, b) => a * b
console.log("Area of the rectangle: " ,areaOfRectangle(2,9));

//Program 2
const isDivisible = (c, d) => c % d == 0
console.log("\n"+ "First number is divisble by second number." ,isDivisible(15,5));

//Program 3
const subtract = (x,y) => x-y
console.log("\n" +"Difference of two numbers is: " ,subtract(15,5));

//Program 4
const concatenate = (p, q, r) => p + q + r
console.log("\n" + "Conctenation of the given three strings input is: ", concatenate("I", " am", " happy"));

//Program 5
function isBigger(a, b){
  if(a > b){
    return "\n" + "Is a bigger than b? True";
  } else{
    return "\n" + "Is b is bigger than a? True";
  }
}
console.log(isBigger(2, 3));


//Program 6
const printProduct = (a, b) => a * b
console.log("\n" + "Product of two numbers: ", printProduct(2, 6));

//Program 7
const getGreeting = (greeting, name) => greeting + name;
console.log("\n" + getGreeting("Hello", " John"));
  