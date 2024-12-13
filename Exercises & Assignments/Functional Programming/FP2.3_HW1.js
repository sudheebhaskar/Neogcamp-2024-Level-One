const tasks = [
    { id: 1, title: "Task 1", status: "todo" },
    { id: 2, title: "Task 2", status: "inProgress" },
    { id: 3, title: "Task 3", status: "completed" },
    { id: 4, title: "Task 4", status: "todo" }
  ];
  
  
  function renderTasks(filter) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  
  
    const filteredTasks = tasks.filter(task => {
      if (filter === 'all') return true;
      return task.status === filter;
    });
  
    filteredTasks.map(task => {
      const taskElement = document.createElement('div');
      taskElement.className = 'task';
      taskElement.innerHTML = `
        <p><strong>ID:</strong> ${task.id}</p>
        <p><strong>Title:</strong> ${task.title}</p>
        <p><strong>Status:</strong> ${task.status}</p>
        <hr>
      `;
      taskList.appendChild(taskElement);
    });
  }
  
  
  document.getElementById('statusFilter').addEventListener('change', (event) => {
    renderTasks(event.target.value);
  });
  
  
  renderTasks('all');
  