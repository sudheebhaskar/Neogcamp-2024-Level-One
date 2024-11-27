//Program 1
console.log("Problem 1");

const greetUserName = (firstName, callback) => {
  let message = "Hello, " + firstName + " " + callback('Doe');
  console.log(message);
}

const callback = (lastName) => {
  return lastName = "Doe"
}

greetUserName("John", callback)


//Program 2
console.log("\n" + "Problem 2");

const calculateAge = (year, callback) => {
  let age = 2024 - year;
  callback(age)
}

const displayAge = (age) => {
  console.log(`You are ${age} years old.`)
}

calculateAge(1992, displayAge);


//Program 3
console.log("\n" + "Problem 3");

const generateUsername = (firstName, callBack) => {
          let username = firstName + "_user";
          callBack(username);
}

const callBack = (username) => {
  console.log(`Your username is: ${username}`)
}
generateUsername("Sudheendra", callBack);


//Program 4
console.log("\n" + "Problem 4");

const checkTemperature = (tempInCelsius, callbacK) => {
            let fahrenheit = ((9/5) * tempInCelsius) + 32;
            callbacK(fahrenheit);
}

const displayTemperatureMessage = (tempInCelsius) => {
  if(tempInCelsius > 86){
    console.log('The temperature is: Hot');
  } else if(tempInCelsius > 50 && tempInCelsius < 86){
    console.log('The temperature is: Moderate')
  } else if(tempInCelsius < 50){
    console.log('The temperature is: Cold')
  }
}

checkTemperature(25, displayTemperatureMessage);


//Program 5
console.log("\n" + "Problem 5");

const numbersArray = [1, 2, 3, 4, 5];

const processArray = (numbersArray, caLLback) => {
  const result = [];
  for(let i=0; i < numbersArray.length; i++){
    result.push(caLLback(numbersArray[i]));
  }
  console.log(result);
} 

const squareNumber = (num) => {
  return num*num;
} 

processArray(numbersArray, squareNumber);


//Program 6
console.log("\n" + "Problem 6");

const numbersArraySum = [2, 4, 6, 8, 10];

const processArraySum = (numbersArraySum, callBACK) => {
  const result = [];
  for(let i=0; i <numbersArraySum.length ; i++){
     result.push(callBACK(numbersArraySum[i]));
  }
  console.log(result);
}

const doubleNumber = (Number) => {
  return Number * 2;
}

processArraySum(numbersArraySum, doubleNumber);