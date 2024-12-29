const expenses = [
    { name: 'Groceries', amount: 150 },
    { name: 'Utilities', amount: 80 },
    { name: 'Dining Out', amount: 120 },
    { name: 'Transportation', amount: 50 }
  ];
  
  function renderExpenses(expenses) {
    const expenseList = document.getElementById('expenseList');
    const totalExpenses = document.getElementById('totalExpenses');
  
    expenseList.innerHTML = expenses.map(expense => `
      <div class="expense-item">
        <p><strong>Expense:</strong> ${expense.name}</p>
        <p><strong>Amount:</strong> $${expense.amount}</p>
        <hr>
      </div>
    `).join('');
  
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalExpenses.innerHTML = `<strong>Total Expenses:</strong> $${total.toFixed(2)}`;
  }
  
  document.getElementById('filterCheckbox').addEventListener('change', (event) => {
    if (event.target.checked) {
      const filteredExpenses = expenses.filter(expense => expense.amount > 100);
      renderExpenses(filteredExpenses);
    } else {
      renderExpenses(expenses);
    }
  });
  
  // Initial render
  renderExpenses(expenses);
  