//Program 1
console.log("Problem 1");

const numsArray = [10, 5, 8, 4, 6];

const resultArray = numsArray.map(num => num - num ** 2);

console.log(resultArray); 


//Program 2
console.log("\n" + "Problem 2");

const numbsArray = [3, -2, -5, 12, 8, -4, 7];

const resultArray2 = numbsArray.map(num => {
  if (num < 0) {
    return num - (2 * num);
  } else {
    return num;
  }
});

console.log(resultArray2);


//Program 3
console.log("\n" + "Program 3");

const sentencesArray = [
  "JavaScript is a powerful programming language.",
  "Web development involves frontend and backend technologies.",
  "Coding is a skill that can be learned and mastered over time."
];

const resultArray3 = sentencesArray.map(sentence => {
  const wordCount = sentence.split(' ').length;
  return `${sentence} (${wordCount} words)`;
});

console.log(resultArray3);


//Program 4
console.log("\n" + "Program 4");

const cars = [
  { brand: "Toyota", model: "Camry" },
  { brand: "Honda", model: "Accord" },
  { brand: "Ford", model: "Mustang" }
];

const brands = cars.map(car => car.brand);

console.log(brands);


//Program 5
console.log("\n" + "Program 5");

const movies = [
  { title: "Inception", genre: "Sci-Fi" },
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Dark Knight", genre: "Action" }
];

const genres = movies.map(movie => movie.genre);

console.log(genres);


//Program 6
console.log("\n" + "Problem 6");

const furniture = [
  { type: "Sofa", width: 200, height: 80 },
  { type: "Table", width: 120, height: 60 },
  { type: "Chair", width: 50, height: 45 }
];

const updatedFurniture = furniture.map(item => {
  return {
    type: item.type,
    width: item.width * 1.1,
    height: item.height * 1.1
  };
});

console.log(updatedFurniture);


//Program 7
console.log("\n" + "Problem 7");

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Headphones", price: 50 },
  { name: "Camera", price: 300 },
];

const updatedProducts = products.map(product => {
  return {
    ...product,
    affordable: product.price <= 100
  };
});

console.log(updatedProducts);


//Program 8
console.log("\n" + "Problem 8");

const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18];

const evenNegativeNumbers = numbers.filter(num => num < 0 && num % 2 === 0);

console.log(evenNegativeNumbers);


//Program 9
console.log("\n" + "Problem 9");

const students = [
  { name: "Alice", score: 85, activeParticipant: true, club: "Math" },
  { name: "Bob", score: 55, activeParticipant: false, club: "History" },
  { name: "Charlie", score: 75, activeParticipant: true, club: "Science" }
];

const filteredStudents = students.filter(student => 
  student.score > 70 && 
  student.activeParticipant && 
  (student.club === "Math" || student.club === "Science")
);

console.log(filteredStudents);


//Program 10
console.log("\n" + "Problem 10");

const words = ["apple", "banana", "kiwi", "grape", "pear", "orange", "strawberry"];

const filteredWords = words.filter(word => word.includes('a') && word.length > 5);

console.log(filteredWords);




