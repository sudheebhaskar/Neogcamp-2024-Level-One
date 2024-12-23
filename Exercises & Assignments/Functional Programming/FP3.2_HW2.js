//Program 1
console.log("Problem 1");

const productInfo = [
  { key: "name", value: "Laptop" },
  { key: "price", value: 12000 },
  { key: "brand", value: "Dell" }
];

const transformedObject = productInfo.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(transformedObject);


//Program 2
console.log("\n" + "Problem 2");

const colleges = [
  { item: "Book", university: "Harvard" },
  { item: "Book", university: "MIT" },
  { item: "Book", university: "Stanford" }
];

const universitiesArray = colleges.reduce((acc, curr) => {
  acc.push(curr.university);
  return acc;
}, []);

console.log(universitiesArray);


//Program 3
console.log("\n" + "Problem 3");

const userPreferences = [
  { key: "theme", value: "Dark Mode" },
  { key: "fontSize", value: 16 },
  { key: "notifications", value: true }
];

const transformedObject1 = userPreferences.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(transformedObject1);


//Program 4
console.log("\n" + "Problem 4");

const continents = [
  { key: "Asia", country: "India" },
  { key: "Europe", country: "France" },
  { key: "North America", country: "USA" }
];

const transformedObject2 = continents.reduce((acc, curr) => {
  acc[curr.key] =  curr.country;
  return acc;
}, {});

console.log(transformedObject2);


//Program 5
console.log("\n" + "Problem 5");

const information = [
  { key: "city", value: "New York" },
  { key: "population", value: 8398748 },
  { key: "area", value: 468.9 }
];

const transformedObject3 = information.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});

console.log(transformedObject3);



