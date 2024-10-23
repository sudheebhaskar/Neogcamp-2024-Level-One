//Destructuring

// to extract elements fron array]]]

const extractArrayValues = (arr) =>{
    const [a, b, third] = arr
  
    console.log(a);
    console.log(b);
    console.log(third);                                                                                                      
  }
  extractArrayValues([1 , 2, 3]) 
  
  //to extract a value from an object
  
  const extractValuesFromObj = (obj) => {
    const {name, age, city} = obj
    console.log(`${name} is ${age} years old and lives in ${city}.`)
  }
  
  extractValuesFromObj({name: "Alice", age: 25, city: "Paris"})
  
  //extract value from nested object
  
  const obj1= {
    id: 1,
    info:{
      title: "JavaScript Basics",
      description: "Learn Fundamentals"
    }
  }
  
  const getObjValues = (obj) => {
    const {info: {title, description} } = obj
  
    console.log(title);
    console.log(description)
  }
  
  getObjValues(obj1)