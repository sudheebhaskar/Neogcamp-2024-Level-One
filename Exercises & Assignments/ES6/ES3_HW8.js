//Program 1
console.log("Problem 1");

const displayWeather = (city, temperature) => {
  return `The weather in ${city} is ${temperature} degrees celsius.`
}

console.log(displayWeather("New York", 20));
console.log(displayWeather("London", 15));


//Program 2
console.log("\n" + "Problem 2");

const formatCurrency = (quantity, currencyCode) =>{
  return `You have ${quantity} ${currencyCode}.`
}

console.log(formatCurrency(50.5, "USD"));
console.log(formatCurrency(100, "EUR"));


//Program 3
console.log("\n" + "Problem 3");

const displayBookSummary = (bookname, author, genre) => {
  return `The book "${bookname}" written by ${author} belongs to the ${genre} genre`;
}

console.log(displayBookSummary("To kill a Mockingbird", "Harper Lee", "Fiction"));


//Program 4
console.log("\n" + "Problem 4");

const displayMovieInfo = (title, release_year, director) => {
  return `The movie "${title}" was released in ${release_year} and directed by ${director}`;
}

console.log(displayMovieInfo("Inception", 2010, "Christopher Nolan"));


//Program 5
console.log("\n" + "Problem 5");

const constructEmail = (emailID, subject) => {
  console.log(`To: ${emailID}`);
  console.log(`Subject: ${subject}` + "\n");
  console.log("\n" + `Dear ${emailID}, `);
}

constructEmail("alice@example.com", "Meeting Reminder");


//Program 6
console.log("\n" + "Problem 6");

const assessGrade = (score) => {
  return `You are ${score >= 60 ? "passing" : "failing"}`
}

console.log(assessGrade(75));
console.log(assessGrade(60));
console.log(assessGrade(45));


//Program 7
console.log("\n" + "Problem 7");

const showMessage = (item, quantity) => {
  return `You have ${quantity} ${item}${quantity > 1 ? "s" : ""}`
}

console.log(showMessage("bangle", 10));
console.log(showMessage("lipstick", 1));


//Program 8
console.log("\n" + "Problem 8");

const assessMarks = (marks, grade) => {
  return `You are ${marks > 60 && grade =="A" ? "passing" : "failing"}`
}

console.log(assessMarks(95, "A"));
console.log(assessMarks(62, "C"));
console.log(assessMarks(45, "D"));


//Program 9
console.log("\n" + "Problem 9");

const showMsg = (bangle, quantity1, lipstick, quantity2) => {
  return `${quantity1 > 10 && quantity2 > 5 ? "You have a good collection." : "You need to update your collection."}`
}

console.log(showMsg("bangle", 11, "lipstick", 6));
console.log(showMsg("bangle", 5, "lipstick", 1));
console.log(showMsg("bangle", 12, "lipstick", 4));


//Program 10
console.log("\n" + "Problem 10");

const shareStationaryMessage = (pencils, erasers) => {
  return `${(pencils > 10 && erasers > 5) || (pencils > 5 && erasers > 10) ? "Please share stationery with friends" : "Please ask your friends for stationery"}`
}

console.log(shareStationaryMessage(12, 8));
console.log(shareStationaryMessage(7, 15));
console.log(shareStationaryMessage(5, 3));