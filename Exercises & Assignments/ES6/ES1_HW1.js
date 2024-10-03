//Question 1
const isBirthday = true;
let age = 17;
if(isBirthday){
  age = age + 1;
  console.log("Program 1:")
  console.log(`Current Age: ${age}`);
  console.log("\n");
}

//Question 2
const ticketPrice = 100;
let discountedPrice;
const passengerAge = 67;

if(passengerAge > 60){
  discountedPrice = (15/100 * ticketPrice);
  discountedPrice = ticketPrice - discountedPrice;
  console.log("Program 2:")
  console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
} else{
  console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
}
console.log("\n");

//Question 3
 let num1= 28;
let num2= 78;
let num3= 36;

console.log("Program 3:");

if(num3 > num1 && num3 > num2){
  console.log(`The Third number ${num3} is the largest.`)
} else{
  console.log(`The Third number ${num3} is not the largest`)
}
console.log("\n");

//Question 4
console.log("Program 4:");
const item1 = "Saree";
const item2 = "Kurta";
const item3 = "Jeans";
const item4 = "Shoes";

const item1Price = 500;
const item2Price = 300;
const item3Price = 900;
const item4Price = 400;

let totalPrice = item1Price + item2Price + item3Price + item4Price;

const deliveryCharge = 99;

if(totalPrice < 1999){
  totalPrice = totalPrice + deliveryCharge;
} else{
  console.log("No Delivery Charge.");
}
console.log("\n");
console.log("Shopping Cart:"); 
console.log("-------------------------------------------------");
console.log(`Item: ${item1}, Price: ${item1Price}`);
console.log(`Item: ${item2}, Price: ${item2Price}`);
console.log(`Item: ${item3}, Price: ${item3Price}`);
console.log(`Item: ${item4}, Price: ${item4Price}`);
console.log("---------------------------------------------------");

console.log("Delivery Charges: No Delivery Charge");
console.log("-------------------------------------------------");
console.log(`Total Cart Price: ${totalPrice}`);
console.log("\n");

//Question 5
console.log("Program 5:");
let number = 13;

if(number > 0){
  console.log("The number is positive.");
} else if(number < 0){
  console.log("The number is negative.");
} else{
  console.log("The number is zero.");
}
console.log("\n");

//Question 6
console.log("Program 6:");
const marks1 = 85;
const marks2 = 90;
const marks3 = 78;

const student1 = "Rahul";
const student2 = "Priya";
const student3 = "Tina";

if(marks1 > marks2 && marks1 > marks3){
  console.log(`Rahul has the highest marks: ${marks1}`);
} else if(marks2 > marks1 && marks2 > marks3){
  console.log(`Priya, scored the highest marks: ${marks2}`);
} else{
  console.log(`Tina, scored the highest marks: ${marks3}`);
}