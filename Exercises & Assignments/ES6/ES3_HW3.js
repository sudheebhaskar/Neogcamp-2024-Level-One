//Program 1
console.log("Problem 1");

const copyAndAppend = (arr, element) => [...arr, element]
console.log(copyAndAppend(["apple", "orange"], "banana"))


//Program 2
console.log("\n" + "Problem 2");

const copyAndAdd = (arr, element) => [...arr, element]
console.log(copyAndAdd([10, 20], 30));


//Program 3
console.log("\n" + "Problem 3");

const mergeArrays = (array1, array2) => [...array1, ...array2]
console.log(mergeArrays([10, 20],[30, 40, 50]));


//Program 4
console.log("\n" + "Problem 4");

const mergeNameArrays = (arr1, arr2) => [...arr2, ...arr1]
console.log(mergeNameArrays(["Alice", "Bob"], ["John", "Mac", "Maze"]));


//Program 5
console.log("\n" + "Problem 5");

const copyPersonObject = (obj, key, value) => ({...obj, [key]:value})
console.log(copyPersonObject({firstName: "Alice", age: 20}, "lastName", "JohnSon"))


//Program 6
console.log("\n" + "Problem 6");

const copyEmployeeObject = (obj, key, value) => ({...obj, [key]:value}) 
console.log(copyEmployeeObject({employeeID: 243, name: "Bob", age: 20}, "department", "IT department"));


//Program 7
console.log("\n" + "Problem 7");

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
console.log(mergeObjects({x: "hello"}, {y: "World"}));


//Program 8
console.log("\n" + "Problem 8");

const modifyObjectProperties = (obj, modifiedObj) => ({...obj, ...modifiedObj})
console.log(modifyObjectProperties({name: "Alice", age: 25}, {age:30}));
console.log(modifyObjectProperties({fruit: "apple", color: "red"},{color: 'green'}));


//Program 9
console.log("\n" + "Problem 9");

const mergeObject = (object1, object2) => ({...object1, ...object2}) 
console.log(mergeObject({a: 1, b:2},{b:3, c:4}));


//Program 10 
console.log("\n" + "Problem 10");

const mergeThreeArrays = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3]
console.log(mergeThreeArrays([11, 12], [15, 16, 17],[20, 21]));


//Program 11
console.log("\n" + "Problem 11");

const mergeThreeArray = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3]
console.log(mergeThreeArray([1, true], ["Are", "You", "Hungry"], [false, 2]));