//Problem 1
console.log("Problem 1");
const rectangleArea = (a = 3, b = 5) => a * b
console.log(rectangleArea());

const rectangledArea = (a, b = 3) => a * b
console.log(rectangledArea(4));

//Problem 2
console.log("\n"+"Problem 2");
const concatenateStrings = (str1, str2) => str1 + str2
console.log(concatenateStrings("Hello", "World"))
console.log(concatenateStrings("Hello", " neoG"));


//Problem 3
console.log("\n"+"Problem 3");
const cylinderVolume = (r = 2, h = 4) => Math.PI * r * r * h;
console.log(cylinderVolume());
console.log(cylinderVolume(3));
console.log(cylinderVolume(3, 5));


//Problem 4
console.log("\n" + "Problem 4");
const shoppingCartTotal = (price, quantity = 1) => price * quantity
console.log(shoppingCartTotal(10));
console.log(shoppingCartTotal(15, 3));
console.log(shoppingCartTotal(0));

//Problem 5 
console.log("\n" + "Problem 5");

const generateUserProfile = (username = "Guest", Age = 25, country = "Unknown") => "Username: " + username + ", " + "Age: " + Age + ", " + "Country: " + country
console.log(generateUserProfile());
console.log(generateUserProfile("Alice",30,"USA"));


//Problem 6
console.log("\n" + "Problem 6");

const sum = (a, b = 5) => a + b
console.log(sum(2, 4));
console.log(sum(3));

//Problem 7
console.log("\n" + "Program 7");

const expoPower = (a, b = 1) => a ** b
console.log(expoPower(2, 3));
console.log(expoPower(5));


//Problem 8
console.log("\n" + "Problem 8");

const triangleArea = (l, h = 2) => l * h
console.log(triangleArea(5));
console.log(triangleArea(3, 6));


//Problem 9
console.log("\n" + "Problem 9");

const concatenatedStrings = (str1 , str2 ="") => str1 + str2
console.log(concatenatedStrings("Good"));