//Program 1
console.log("Problem 1");

const printTemperature = ({location: locationName, temperature: temperatureinDegree}) => {
  console.log(`Location: ${locationName}, Temperature: ${temperatureinDegree} degree celsius`)
}

printTemperature({location:"New York", temperature: 15});
printTemperature({location: "London", temperature: 10});


//Program 2
console.log("\n" + "Problem 2");

const printFruit = ({fruit: fruitName, color: fruitColor, inStock: availability}) => {
  console.log(`Fruit Name: ${fruitName}, Fruit Color:${fruitColor}, Available: ${availability}`)
}

printFruit({fruit: "Apple", color: "Red", inStock: true});
printFruit({fruit: "Grapes", color: "Green", inStock: false});


//Program 3
console.log("\n" + "Problem 3");

const printStudentScores = ([studentName, score1, score2, score3]) => {
  console.log(`Student: ${studentName}, Scores: ${score1}, ${score2}, ${score3}`);
}

printStudentScores(["Alice", 90,85,95]);
printStudentScores(["Bob", 80,75,85]);


//Program 4
console.log("\n" + "Problem 4");

const printProductDetails = ({name: product, price: price}) => {
  console.log(`Product: ${product}, Price: $${price}`);
}

printProductDetails({ name: "Laptop", price: 899 });
printProductDetails({ name: "Phone", price: 599 });


//Program 5
console.log("\n" + "Problem 5");

const printPersonDetails = ({ name: personName = "Anonymous", age: personAge = "Unknown" }) => {
  return `Person's Name: ${personName}, Person's Age: ${personAge}`;
};

console.log(printPersonDetails({ name: "John", age: 30 }));
console.log(printPersonDetails({}));


//Program 6
console.log("\n" + "Problem 6");

const  printCityPopulation = ([city, {population, country}]) => {
  return `City: ${city}, Population: ${population}, Country: ${country}`
}

console.log(printCityPopulation(["New York", {population: 8623000, country: "USA"}]));
console.log(printCityPopulation(["Tokyo", {population: 3783000, country: "Japan"}]))


//Program 7
console.log("\n" + "Problem 7");

const printCarDetails = ([name, {model, price}]) => {
    return `Name: ${name}, Model: ${model}, Price: Rs${price}`;
}

console.log(printCarDetails(["All-Terrain SUV", {model: "SUV", price: 4500000}]));
console.log(printCarDetails(["GreenDrive Electric", {model: "Electric", price: 500000}]));





  