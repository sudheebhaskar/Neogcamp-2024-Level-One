//Program 1
console.log("Program 1");

function calculateSalary(hoursWorked, hourlyRate){
 const  totalSalary = hoursWorked * hourlyRate;
  return totalSalary;
}

console.log("Total Salary:", calculateSalary(70, 500));
console.log("\n");

//Program 2
console.log("Program 2");
let workedHours;
let marks;
let salary;
let bonus;
let totalSalary;
function calculateBonus(workedHours, marks, salary){
   if(workedHours > 25 && marks > 85){
     bonus = (10* salary)/100;
     totalSalary = bonus + salary;
   }else if(workedHours > 15 && marks > 75){
     bonus = (5 * salary)/100;
     totalSalary = bonus + salary;
   } else{
     totalSalary = salary;
   }
     return totalSalary
     }

console.log("Total Salary with Bonus:", calculateBonus(20,80,5000));
console.log("\n");

//Program 3
console.log("Program 3");
let price1;
let quantity1;
let price2;
let quantity2;

function calculateFinalAmount(price1, quantity1, price2, quantity2){
 const totalPrice1 = price1 * quantity1;
  const totalPrice2 = price2 * quantity2;

  const totalAmount = totalPrice1 + totalPrice2;
  return totalAmount;
}

console.log("Total Amount: ",calculateFinalAmount(200, 10, 500, 5));
console.log("\n");

//Program 4
console.log("Program 4");

let age;
let isStudent;
let baseAllowance;

function calculateAllowance(age, isStudent, baseAllowance){

  if((age < 18) && (isStudent = true)){
    baseAllowance = 100 + baseAllowance;  
  } else if((age >= 18 || age <= 25) && (isStudent = true)){
    baseAllowance = 50 + baseAllowance;
  } else{
     baseAllowance = baseAllowance;
  }
  return baseAllowance;
}

console.log("Base Allowance: ", calculateAllowance(16, true, 500));
console.log("\n");

//Program 5
console.log("Program 5");

let totalWeight;
let country;
let baseCost;

function calculateShippingCost(totalWeight, country, baseCost){

  if((totalWeight <= 1) && (country = "Local")){
    baseCost = baseCost + 10;
  } else if((totalWeight >1 ) && (country = "International")){
     baseCost = baseCost + 20;
  } else {
    baseCost = baseCost;
  }

  return baseCost;
}

console.log("Base Cost: ", calculateShippingCost(0.5, "Local", 50));