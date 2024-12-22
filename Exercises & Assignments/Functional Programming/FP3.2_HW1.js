//Program 1
console.log("Problem 1");

const data = [
  { key: "item", value: "Pencil" },
  { key: "price", value: 250 },
  { key: "inStock", value: true }
];

const transformedObject = data.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(transformedObject);


//Program 2
console.log("\n" + "Problem 2");

const students = [
  { item: "Pen", color: "blue" },
  { item: "Pen", color: "black" },
  { item: "Pen", color: "red" }
];

const colorsArray = students.reduce((acc, curr) => {
  acc.push(curr.color);
  return acc;
}, []);

console.log(colorsArray);


//Program 3
console.log("\n" + "Problem 3");

const countries = [
  { item: "Car", manufacturingCity: "New York" },
  { item: "Car", manufacturingCity: "Los Angeles" },
  { item: "Car", manufacturingCity: "Chicago" }
];

const citiesArray = countries.reduce((acc, curr) => {
  acc.push(curr.manufacturingCity);
  return acc;
}, []);

console.log(citiesArray);


//Program 4
console.log("\n" + "Problem 4");

const groceryItems = [
  { item: "Fruit", name: "Apple" },
  { item: "Fruit", name: "Banana" },
  { item: "Fruit", name: "Orange" }
];

const fruitsArray = groceryItems.reduce((acc, obj) => {
  acc.push(obj.name);
  return acc;
}, []);

console.log(fruitsArray);


//Program 5
console.log("\n" + "Problem 5");

const details = [
  { key: "category", value: "Electronics" },
  { key: "rating", value: 4.5 },
  { key: "available", value: true }
];

const transformeddObject = details.reduce((acc, obj) => {
  acc[obj.key] = obj.value;
  return acc;
}, {});

console.log(transformeddObject);






