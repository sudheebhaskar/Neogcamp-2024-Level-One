const tasks = [
    {id: 1, task: "Task 1", status: "todo"},
    {id: 2, task: "Task 2", status: "completed"},
    {id: 3, task: "Task 3", status: "inProgress"},
    {id: 4, task: "Task 4", status: "todo"},
    {id: 5, task: "Task 5", status: "completed"},
  ];
  
  const taskListContainer = document.querySelector("#taskList");
  const filterRadioButttons = document.getElementsByName("tasks");
  
  function renderTasks(selectedTask){
  
    const filteredTasks = selectedTask === "all" ? tasks: tasks.filter(task => task.status === selectedTask)
  
    const taskListHTML = filteredTasks.map(task => `
    <li>
      <strong>ID:</strong> ${task.id} <br>
      <strong>Task:</strong> ${task.task}<br>
      <strong>Status: </strong> ${task.status}<br>  
      <hr>
      </li>
      `)
    taskListContainer.innerHTML = taskListHTML.join('');
  }
  
  renderTasks('all')
  
    filterRadioButttons.forEach(radioBtn => {
      radioBtn.addEventListener('change', function(){
        renderTasks(this.value)
      })
    })