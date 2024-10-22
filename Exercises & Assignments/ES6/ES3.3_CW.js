//spread operators

//duplicate an array
let numbersArr = [1, 2, 3]

let newNumbersArr = [...numbersArr]

newNumbersArr.push(4)

console.log(newNumbersArr)
console.log("Original Array: ", numbersArr)

const duplicateArray = (arr) => [...arr]

console.log(duplicateArray(["apple", "banana"]))

// adding new element to an array

const addNewElement = (arr, element) => [...arr, element]

console.log(addNewElement(["Kiwi", "Orange"], "apple"))

//combining two arrays

const combineArray = (arr1, arr2) => [...arr1, ...arr2] 

console.log(combineArray([11, 12, 13],[14, 15, 16]))

//coping an array of objects & adding a property to object

const copyObject = (obj, key, value) => ({...obj, [key]:value}) 
console.log(copyObject({name: "Alice", age: 20}, "favColor", "blue"))