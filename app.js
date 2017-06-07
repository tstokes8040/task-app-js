window.addEventListener('load', function() {
  const addButton = document.querySelector('.add-task-button');
  const taskList = document.querySelector('.task-list');

  addButton.addEventListener('click', function(){
    let taskName = document.querySelector('.task-name input').value;
    localStorage.setItem(taskName, 'false');
    taskList.insertAdjacentHTML('beforeend','<p class="task">' + taskName + '</p>');
    document.querySelector('.task-name input').value = "";
  });

  //Get all tasks from local storage
  function getAllTasks () {
    for (let i = 0; i < localStorage.length; i++) {
      let taskName = localStorage.key(i);
      taskList.insertAdjacentHTML(`beforeend`, `<p class="task">${taskName}</p>`);
    }
  }

  getAllTasks();
});
