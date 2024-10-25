//Program 1
console.log("Problem 1");

const sumAndDifference = (arr) =>{
  console.log("Sum: ", arr[0] + arr[1]);
  console.log("Difference: ", arr[0]- arr[1]);
}
console.log(sumAndDifference([5, 3]))
console.log(sumAndDifference([10, 7]))


//Program2
console.log("\n" + "Problem 2");

const extractFirstAndLast = (str) => {
  if(str.length > 1){
    console.log("First Character: " ,str[0]);
    console.log("Last Character: ", str[str.length-1]);
  }
}

extractFirstAndLast("hello");
extractFirstAndLast("world");


//Program 3
console.log("\n" + "Problem 3");

const calculateRectangleArea = (obj) => {
     const {length, width} = obj;
  console.log("The area of the rectangle is: ", obj.length * obj.width);
}

calculateRectangleArea({length: 5, width: 3});
calculateRectangleArea({length: 8, width: 4});


//Program 4 
console.log("\n" + "Problem 4");

const getFirstTwoColors = (array) =>{
   const [firstColor, secondColor] = array;
  console.log("The First two colors are: " + firstColor + " and " + secondColor);
} 

getFirstTwoColors(["red", "blue", "green", "yellow"]);
getFirstTwoColors(["orange", "purple", "pink"]);


//Program 5
console.log("\n" + "Problem 5");

const extractNestedInfo = (obj) => {
  const {data:{name, age, country}} = obj
  console.log(`${name} is ${age} years old and lives in ${country}.`)
}

extractNestedInfo({data: {name: "John", age: 35, country: "USA"}});
extractNestedInfo({data: {name: "Emma", age: 28, country: "Canada"}});


//Program 6
console.log("\n" + "Problem 6");

const productAndDifference = (arr1) => {
   const [firstNum, secondNum, thirdNum] = arr1;
   console.log("Product and Difference: ", ((firstNum * secondNum) - thirdNum));
}

productAndDifference([5, 3, 5, 6]);
productAndDifference([10, 7, 35, 30]);


//Program 7
console.log("\n" + "Problem 7");

const extractData = (obj1) => {
  const {product: {itemName, description, manufacturingCountry }} = obj1;
  console.log(`Item name: ${itemName}, Description: ${description}, Manufacturing Country: ${manufacturingCountry}`);
}

extractData({id: 1, product:{itemName: "Pencil", description: "Extra Dark Pencil", manufacturingCountry: "USA"}});

extractData({id: 2, product:{itemName: "Sharpener", description: "Faber Catell Premium", manufacturingCountry: "Germany"}});