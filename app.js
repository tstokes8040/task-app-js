window.addEventListener('load', function() {
  const $ = document.querySelector.bind(document);
  const addButton = $('.add-task-button');
  const taskList = $('.task-list');
  let allTasks = [];


  //Add new task with user clicks add button
  addButton.addEventListener('click', function (){
    addTask();
  });

  //Add a task when enter key is pressed
  document.addEventListener('keydown', function (event) {
    const keyName = event.key;
    if (keyName == 'Enter' && $('.task-name input').value != "") {
      addTask();
    }
  });

  //Task class
  class Task {
    constructor(name, trashed) {
      this.name = name;
      this.trashed = trashed;
    }
  }

  //Add a new task to local storage
  function addTask() {
    const taskName = $('.task-name input').value;
    const theTask = new Task(taskName, false);
    allTasks.push(theTask);
    localStorage.setItem('Tasks', JSON.stringify(allTasks));
    outputHTML(taskName);
    document.querySelector('.task-name input').value = "";
  }

  //Get all tasks from local storage
  function getAllTasks () {
    if (localStorage.length > 0) {
      const tasks = JSON.parse(localStorage.getItem('Tasks'));
      for (let i = 0; i < tasks.length; i++) {
        let nextTask = new Task(tasks[i]);
        let nextTaskName = tasks[i].name;
        allTasks.push(nextTask);
        outputHTML(nextTaskName);
      }
    }
  }

  function outputHTML (task) {
    const outputTask = task;
    taskList.insertAdjacentHTML(`beforeend`, `<p class="task">${outputTask}</p>`);
  }

  getAllTasks();

});
