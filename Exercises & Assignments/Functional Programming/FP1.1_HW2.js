//Program 1
console.log("Problem 1");

const words = ["apple", "banana", "kiwi", "orange", "grape"];
const threeLetterWords = words.map((phrase) => phrase.slice(0, 3));
console.log(threeLetterWords);


//Program 2
console.log("\n"+"Problem 2");

const nums = [1, 2, 3, 4, 5];
const findTheCube = nums.map((digit) => digit * digit * digit);
console.log("The cube of the given array elements:", findTheCube);


//Program 3
console.log("\n" + "Problem 3");

const fruitsArray = ["apple", "banana", "kiwi", "orange", "grape"];
const trimmedStrings = fruitsArray.map((fruit) => fruit.slice(2))
console.log("Trimmed Strings are: ", trimmedStrings);


//Program 4
console.log("\n" + "Problem 4");

const salaries = [5000, 7500, 12000, 3000, 9000];
const bonuses = salaries.map((salary) => (salary * 10/100) + salary);
console.log("Salary with bonus: ", bonuses)


//Program 5
console.log("\n" + "Problem 5");

const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
const greetings = names.map((name) => "Hello, " + name);
console.log(greetings);


//Program 6
console.log("\n" + "Problem 6");

const sentences = ["Hello, how are you?", "JavaScript is fun!", "Arrays are versatile."]
const lengthOfEach = sentences.map((sentence) => sentence.length);
console.log("The length of respective sentence is: ",lengthOfEach);


//Program 7
console.log("\n" + "Problem 7");

const temperaturesCelsius = [0, 20, 37, -5, 10];
const temperatureInFahrenheit = temperaturesCelsius.map((celsius) =>(celsius * 9/5) + 32);
console.log("Converted Celsius to Fahrenheit: ", temperatureInFahrenheit);


//Program 8
console.log("\n" + "Problem 8");

const prices = [50, 75, 120, 30, 90];
const discountedPrice = prices.map((price) =>price - (10/100 * price))
console.log("The Final Price after discount is: ", discountedPrice);


//Program 9
console.log("\n" + "Problem 9");

const decimalNumbers = [50.245600, 750.56770, 12.567050, 300.5065, 9.23406789];
const fixedToTwo = decimalNumbers.map((num) => num.toFixed(2));
console.log("The array of decimal numbers with two decimal points is: ",fixedToTwo);


//Program 10
console.log("\n" + "Program 10");

const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva"];
const namesAlongWithLength = namesArray.map((name) => name + name.length );
console.log("The array of names along with its length: ", namesAlongWithLength);