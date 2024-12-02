//Program 1
console.log("Problem 1");

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 75 },
];

const scoreStatus = students.map((student) => ({...student, score: student.score >= 60 ?
  student.passed = true : student.passed = false

} ))
console.log("Passed or Failed?", scoreStatus);


//Program 2
console.log("\n" + "Problem 2");

const songs = [
  { title: "Bohemian Rhapsody", duration: 367 },
  { title: "Hotel California", duration: 420 },
  { title: "Stairway to Heaven", duration: 482 },
];

const convertToMin = songs.map((song) => ({...song, duration:(song.duration/60) }))
console.log("Duration in minutes:", convertToMin )


//Program 3
console.log("\n" + "Problem 3");

const employees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 70000 },
];

const annualIncome = employees.map((employee) => ({...employee, annualIncome: employee.salary * 12}))

console.log("Employees with annual income: ", annualIncome)


//Program 4
console.log("\n" + "Problem 4");

const newStudents = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 25 },
];

const classifyAge = newStudents.map((newStudent) => ({...newStudent,classification: newStudent.age >= 18 ? "adult": "minor"}))
console.log("Students with age classification: ", classifyAge)


//Program 5
console.log("\n" + "Problem 5");

const employeees = [
  { name: "Emily", salary: 60000 },
  { name: "David", salary: 45000 },
  { name: "Grace", salary: 75000 },
];

const salaryWithSymbol = employeees.map((employeee) => ({...employeee, salary: '$'+ employeee.salary}))
console.log("Employees Salary:", salaryWithSymbol);


//Program 6
console.log("\n" + "Problem 6");

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Headphones", price: 50 },
  { name: "Smartphone", price: 800 },
];

const buyingCost  = products.map((product) => ({...product, price: product.price >= 100 ? "Expensive" : "Affordable"}))
console.log("Products with buying power: ", buyingCost);


//Program 7
console.log("\n" + "Problem 7");

const books = [
  { title: "The Catcher in the Rye", year: 1951 },
  { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },
  { title: "The Hunger Games", year: 2008 },
];

const categorise = books.map((book) => ({...book, category: book.year >= 2000 ? "Modern" : "Classic"}))
console.log("Books categorised as: ", categorise);


//Program 8
console.log("\n" + "Problem 8");

const developers = [
  { name: "John", hourlyRate: 40, hoursPerWeek: 30 },
  { name: "Lisa", hourlyRate: 50, hoursPerWeek: 35 },
  { name: "Mike", hourlyRate: 45, hoursPerWeek: 40 },
];

const yearlyIncome = developers.map((developer) =>({...developer, annualIncome: 50 * (developer.hourlyRate * developer.hoursPerWeek)}));
console.log("Yearly income of developers is: ", yearlyIncome);


//Program 9
console.log("\n" + "Problem 9");

const salesReps = [
  { name: "David", monthlyCommission: 8000 },
  { name: "Helen", monthlyCommission: 10000 },
  { name: "Ivan", monthlyCommission: 6000 },
];

const incomeAnnual = salesReps.map((salesRep) =>({...salesRep, annualIncome: (12 * salesRep.monthlyCommission) + 50000}));
console.log("Annual Income of each Sales Representative: ", incomeAnnual);


//Program 10
console.log("\n" + "Problem 10");

const stuudents = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 60 },
  { name: "Charlie", score: 92 },
];

const gradeGiven = stuudents.map((stuudent) =>({...stuudent, gradeAwarded: givenGrade(stuudent.score)}))

function givenGrade(score){
  if(score >= 90){
    return "grade: A"
  } else if(score >= 80){
    return "grade: B"
  } else if(score >=  70){
    return "grade: C"
  } else if(score >= 60){
    return "grade: D"
  } else {
    return "grade: F"
  }
}

console.log("Students along with their grades: ", gradeGiven);