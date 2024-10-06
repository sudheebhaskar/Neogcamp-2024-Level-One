//Program 1
const car = {
    brand: 'Toyota',
    model: 'Corolla'
};

console.log("1.1 ",car.brand);
console.log("1.2 ",car.model);

car.brand = 'Honda';
console.log("1.4 ", car);

car.year = 2022;
car.color = "Blue";

console.log("1.6: Properties of 'car' object");

for(property in car){
console.log(property + ": " +  car[property]);
}

//Program 2
const citizen = {
name: "Swamy",
age: 68,
occupation: "Govt Official"
}

console.log("2.1: Updated Age: ", citizen.age);

citizen.age = citizen.age + 2;
console.log("2.2: Updated age after adding 2:", citizen.age);

citizen.city = "Delhi";
console.log("2.3: Properties of citizen object:");

for(property in citizen){
console.log(property + ": " + citizen[property]);
}

//Program 3
const person = {
name: "Narayana",
age: 67,
bp: "Normal"
};
console.log("3.1", person);

if((person.age > 60) && (person.bp == "Normal")){
console.log("3.2: Fit to Travel.");
} else{
console.log("3.2: Not fit to travel");
}

