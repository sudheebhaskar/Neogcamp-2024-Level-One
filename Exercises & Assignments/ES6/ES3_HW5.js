//Program 1
console.log("Problem 1");

const createObjectWithDynamicField = (obj, key, value) => ({...obj, [key]: value});

console.log(createObjectWithDynamicField({},"name", "Alice"));
console.log(createObjectWithDynamicField({}, "age", 25))


//Program 2
console.log("\n" + "Problem 2");

const addObjectField = (obj, key, value) => ({...obj, [key]: value});

console.log(addObjectField({name: "Bob", age: 30}, "city", "New York"));
console.log(addObjectField({fruit: "apple", color:"red"}, "quantity", 3));


//Program 3
console.log("\n" + "Problem 3");

const addObjField = (obj, key, value) => ({...obj, [key]: value});

console.log(addObjField({productName: "Side Table", color: "Walnut Brown"}, "inStock", true));
console.log(addObjField({productName: "Dining Table", color: "White"}, "inStock", false));


//Program 4
console.log("\n" + "Program 4");

const updateObjectField = (obj, key, value) => ({...obj, [key]:value});

console.log(updateObjectField({name: "Charlie", age: 28} ,"age", 29));
console.log(updateObjectField({city: "Paris", country: "France"}, "country", "Spain"))


//Program 5
console.log("\n" + "Problem 5");

const updateProductObject = (obj, key, value) => ({...obj, [key]:value});

console.log(updateProductObject({productName: "Side Table", inStock: true}, "inStock", false));
console.log(updateProductObject({productName: "Dining Table", color: "White", inStock: false}, "inStock", true));


//Program 6
console.log("\n" + "Problem 6");

//const generateObject = (obj, key, value) => ({...obj, [key]:value});

//console.log(generateObject({}, "animal", "Dog", "sound", "Bark"))

const generateObject = (...entries) => {
  let obj = {};
  for (let i = 0; i < entries.length; i += 2) {
    obj[entries[i]] = entries[i + 1];
  }
  return obj;
};

console.log(generateObject("animal", "Dog", "sound", "Bark"));
console.log(generateObject("fruit", "Banana", "color", "Yellow"));


//Program 7
console.log("\n" + "Problem 7");

const generateObj = (...values) => {
  let obj = {};
  for (let i = 0; i < values.length; i += 2) {
    obj[values[i]] = values[i + 1];
  }
  return obj;
}

console.log(generateObj("mealType", "lunch", "meal", "Rice-Dal", "calorie", "200 cal"));
console.log(generateObj("mealType", "Dinner", "meal", "Chapati-Dal", "calorie", "180 Cal"));


//Program 8
console.log("\n" + "Problem 8");

const createNewObjectWithDynamicField = (...points) => {
  let obj = {};
  for (let i = 0; i < points.length; i += 2) {
    obj[points[i]] = points[i + 1];
  }
  return obj;
}

console.log(createNewObjectWithDynamicField("name", "Maze", "favColor", "Pink", "isMarried", false));
console.log(createNewObjectWithDynamicField("age", 35, "hobby", "Cooking", "isMarried", true));