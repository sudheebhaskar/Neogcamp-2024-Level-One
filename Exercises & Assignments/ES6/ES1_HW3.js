//Program 1:
console.log("Program 1");
const  givenArray = [5, 12, 7, 25, 18, 3];

function printArray(givenData){
  console.log(givenData);
}

console.log(printArray(givenArray));
console.log("\n");

//Program 2:
console.log("Program 2");
 const newArray = [];
function addTen(givenData){
  
for(let i=0; i < givenData.length; i++){
    givenData[i] = givenData[i] + 10;
    newArray.push(givenData[i]);
  }
  return newArray;
}

console.log(addTen(givenArray));
console.log("\n");

//Program 3:
console.log("Program 3");
const assortedArray = [];
 const  inputArray = [5, 12, 7, 25, 18, 3];
function convertToEven(inputData){
 
  for(let i=0; i < inputData.length; i++){
    if((inputData[i] % 2) != 0){
      inputData[i] = inputData[i] + 1;
      assortedArray.push(inputData[i]);
    } else {
      inputData[i] = inputData[i] + 0;
      assortedArray.push(inputData[i]);
    }
  }
  return assortedArray;
}

console.log(convertToEven(inputArray));
console.log("\n");

//Program 4:
console.log("Program 4");
 const  correctedArray = [5, 12, 7, 25, 18, 3];

function divisibleByTwo(correctedArray){
  const anotherArray = [];
  for(let i=0; i < correctedArray.length; i++){
    if((correctedArray[i] % 2) == 0){
      anotherArray.push(correctedArray[i]);
    }
  }
  return anotherArray;
}
//console.log(correctedArray);
console.log(divisibleByTwo(correctedArray));
console.log("\n");

//Program 5:
console.log("Program 5");
const  inArray = [5, 12, 7, 25, 18, 3];

function sumOfAll(arrayData){
  let totalSum = 0;
  for(let i=0; i < arrayData.length; i++){
   totalSum = totalSum + arrayData[i] ;
  }
  return totalSum;
}

console.log(sumOfAll(inArray));
console.log("\n");


//Program 6
console.log("Program 6");
const arrayGot = [5, 12, 7, 25, 18, 3];

function sumOfEvenOdd(array){
   let evenSum = 0;
   let oddSum = 0;
  let sumOfAll = 0;
  for(let i=0; i < array.length; i++){
    if(array[i] % 2 == 0){
      evenSum = evenSum + array[i];
    } else{
      oddSum = oddSum + array[i];
    }
  }
  console.log("Sum of Odd Numbers: ",oddSum);
  console.log("Sum of even numbers: ", evenSum);
}

sumOfEvenOdd(arrayGot);