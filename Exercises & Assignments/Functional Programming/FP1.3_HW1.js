const employees = [
    {ID:1, Name: "Alice", Position: "Developer"},
    {ID:2, Name: "Bob", Position: "Designer"},
    {ID:3, Name: "Charlie", Position: "Manager"},
    {ID:4, Name: "David", Position: "Tester"},
  ];
  
  const employeeListDiv = document.querySelector("#employeeList");
  
  const employeeListHTML = employees.map(employee => `
    <div>
    <strong>ID:</strong> ${employee.ID} <br>
    <strong>Name: </strong> ${employee.Name} <br>
    <strong>Position: </strong> ${employee.Position} <br>
    <hr>
    </div>
  `)
  
  employeeListDiv.innerHTML = employeeListHTML.join('')
  
  