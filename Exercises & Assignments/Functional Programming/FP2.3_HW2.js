const employees = [
    { id: 1, name: "Alice", experience: 2 },
    { id: 2, name: "Bob", experience: 9 },
    { id: 3, name: "Charlie", experience: 4 },
    { id: 4, name: "John", experience: 19 }
  ];
  
  
  function renderEmployees(filter) {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
  
  
    const filteredEmployees = employees.filter(employee => {
      if (!filter) return true;
      return employee.experience > 5;
    });
  
    
    filteredEmployees.map(employee => {
      const employeeElement = document.createElement('div');
      employeeElement.className = 'employee';
      employeeElement.innerHTML = `
        <p><strong>ID:</strong> ${employee.id}</p>
        <p><strong>Name:</strong> ${employee.name}</p>
        <p><strong>Experience:</strong> ${employee.experience} years</p>
        <hr>
      `;
      employeeList.appendChild(employeeElement);
    });
  }
  
  
  document.getElementById('experienceFilter').addEventListener('change', (event) => {
    renderEmployees(event.target.checked);
  });
  
  
  renderEmployees(false);
