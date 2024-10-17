//Program 1
console.log("Problem 1");
const calculateAverage = (numArray) => {
  let sum = 0;
  for(let i=0; i < numArray.length; i++){
    sum = sum + numArray[i];
  }
  let arrLength = numArray.length;
  let average = (sum / arrLength)
  //console.log(arrLength);
  return average;
}

console.log(calculateAverage([5, 10, 15]));
console.log("\n");

//Program 2
console.log("Problem 2");

const reverseString = (str) => {
  let newString = "";
  for(let i = str.length-1; i >=0; i--){
    newString = newString + str[i]
  }
  return newString
}

console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log("\n");

//Program 3
console.log("Problem 3");

const findLongestWord = (str) => {
  let longWord = str[0];
  for(let i=0; i < str.length; i++){
    if(str[i].length > longWord.length){
      longWord = str[i];
    }
  }
  return longWord;
}
console.log(findLongestWord(["apple", "banana", "grapefruit"]))
console.log("\n");  

//Program 4
console.log("Problem 4");

const calculateStringLength = (inputString) => {
  let length = 0;
  for(let i=0; i < inputString.length; i++){
    length = length + 1;
  }
  return length;
}

console.log(calculateStringLength("hello"));
console.log("\n");




//Program 5
console.log("Problem 5");

const students = [
                  {name:"Alice", age:20, grade:85},
                  {name: "Bob", age: 22, grade:92},
                  {name: "Charlie", age: 19, grade:88}
                 ];

console.log("5.1");
const totalGrade = students[0].grade + students[1].grade + students[2].grade;
//console.log(totalGrade)
const noOfStudents = 3;

findAverageGrade = (arrStudents) => {
   const averageGrade = totalGrade / noOfStudents;
   return averageGrade;
}
console.log(findAverageGrade(students));
console.log("\n");

//Program 5.2
console.log("Problem 5.2");

const getNames = (students) => {
   const nameArr = [];
  for(let i=0; i < students.length; i++){
    nameArr.push(students[i].name)
  } 
  return nameArr
}
console.log(getNames(students));
console.log("\n");


//Program 5.3
console.log("5.3");

const calculateAverageAge = () => {
  let totalNoOfStudents = 3;
  let totalsAge = students[0].age + students[1].age + students[2].age
  const averageAge = totalsAge / totalNoOfStudents;

  return averageAge;
}
console.log(calculateAverageAge(students));
console.log("\n");


//Program 5.4
console.log("5.4");

const highGrades = students => {
  for(i=0; i < students.length; i++){
    if(students[i].grade > 90){
       return students[i];
    }
  }
}
console.log(highGrades(students));
console.log("\n");

//Program 5.5 
console.log("5.5");

const isAnyBelow18 = (students) => {
  for(let i=0; i < students.length; i++){
    if(students[i].age < 18){
      return students[i];
    } else{
      return false;
    }
  }
}
console.log(isAnyBelow18(students));
console.log("\n");

//Program 5.6
console.log("5.6");

const findStudentByName = (arra, x) => {
  for(let i=0; i < arra.length; i++){
    if(arra[i] === "x"){
      return arra[i]
    }
  }
}
console.log(findStudentByName(students, "charlie"));
console.log("\n");

//Program 5.7
console.log("5.7");

const getHighScoreStudents = (students) => {
  const highScoreStudents = [];
  for(let i = 0; i < students.length; i++){
    if(students[i].grade > 85){
      highScoreStudents.push(students[i].name)
     }
  }
  return highScoreStudents;
} 
console.log(getHighScoreStudents(students));
console.log("\n")


