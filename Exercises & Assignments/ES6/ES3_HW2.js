//Program 1
console.log("Problem 1");

const logFirstAndRest = (a, ...rest) => {
    console.log("First: ", a);
    console.log("Rest: ", rest);
}

logFirstAndRest(1, 2, 3, 4, 5)


//Program 2
console.log("\n" + "Problem 2");

const logFirstAndSecond = (a, b, ...rest) => {
  console.log("First: ", a);
  console.log("Second: ", b);
  console.log("Rest: ", rest);
}

logFirstAndSecond(12, 22, 33, 44, 55);


//Program 3
console.log("\n" + "Problem 3");

const calculateProduct = (...product) => {
  let result = 1;
  for(let i=0; i < product.length; i++){
    result = result * product[i];
  }
   return result
}

console.log(calculateProduct(2, 3, 4));
console.log(calculateProduct(5, 2, 1, 3)); 

//Program 4
console.log("\n" + "Problem 4");

const createSentence = (... concatenate) => {
  let result = ""
  for(let i=0; i < concatenate.length; i++){
    result = result + " " + concatenate[i];
  }
  return result
} 

console.log(createSentence("JavaScript", "is", "awesome"));


//Program 5
console.log("\n" + "Problem 5");

const findSum = (...numbers) => {
  let sum = 0;
  for(let i=0; i < numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum;
}

console.log("Sum of numbers is: ", findSum(2, 4, 6, 8, 10));
console.log("Sum of numbers is: ", findSum(20, 30, 60, 70, 80, 110));


//Program 6
console.log("\n" + "Problem 6");

const containsValue = (value, ...alphabetWords) => {
    for(let i=0; i < alphabetWords.length; i++){
      if(alphabetWords[i] === value){
        return true
      }
    }
  return false;
  }

console.log(containsValue(3, 1, 2, 3, 4));
console.log(containsValue("apple", "banana", "orange"));


//Program 7
console.log("\n"+ "Problem 7");

const calculateAverage = (...number) => {
  let totalNumbers = number.length;
  let totalSum = 0;
  let average = 0;
  for(let i=0; i < number.length; i++){
    totalSum = totalSum + number[i];
  }
  average = (totalSum/totalNumbers)
  return average;
}

console.log(calculateAverage(10, 5, 15));
console.log(calculateAverage(2, 4, 6, 8));