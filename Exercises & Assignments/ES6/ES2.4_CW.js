//sum of the numbers in a array using arrow function
const calculateSum = (numbersArr) => {
    let sum = 0;
    for(let i=0; i < numbersArr.length; i++){
      sum = sum + numbersArr[i];
    }
    return sum;
  }
  console.log(calculateSum([1, 2, 3, 4, 5]));
  
  
  //reverse a string using arrow function
  const reverseString = (str) => {
    let output = "" ;
    for(let i = str.length - 1; i >= 0 ; i--){
      output = output + str[i];
    }
    return output;
  }
  
  console.log(reverseString("world")); //dlrow
  
  