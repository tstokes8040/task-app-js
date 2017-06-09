window.addEventListener('load', function() {
  const addButton = document.querySelector('.add-task-button');
  const taskList = document.querySelector('.task-list');

  //Add new task with user clicks add button
  addButton.addEventListener('click', function (){
    addTask();
  });

  //Add a task when enter key is pressed
  document.addEventListener('keydown', function (event) {
    const keyName = event.key;
    if (keyName == 'Enter' && document.querySelector('.task-name input').value != "") {
      addTask();
    }
  });

  //Task class
  //COMING SOON

  //Add a new task to local storage
  function addTask() {
    let taskName = document.querySelector('.task-name input').value;
    localStorage.setItem(taskName, 'false');
    taskList.insertAdjacentHTML('beforeend','<p class="task">' + taskName + '</p>');
    document.querySelector('.task-name input').value = "";
  }

  //Get all tasks from local storage
  function getAllTasks () {
    for (let i = localStorage.length - 1 ; i >= 0; i--) {
      let taskName = localStorage.key(i);
      taskList.insertAdjacentHTML(`beforeend`, `<p class="task">${taskName}</p>`);
    }
  }

  getAllTasks();

});
