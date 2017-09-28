window.addEventListener('load', function() {
  const $ = document.querySelector.bind(document);
  const addButton = $('.add-task.button');
  const deleteAllButton = $('.delete-all');
  const taskList = $('.task-list');
  let allTasks = [];

  //Add new task with user clicks add button
  addButton.addEventListener('click', function (){
    if ($('.task-name input').value != "") {
      addTask();
    }
  });

  //Listen for the delete ALL button
  deleteAllButton.addEventListener('click', function (){
    deleteAllTasks();
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
    constructor(id, name, trashed) {
      this.id = id;
      this.name = name;
      this.trashed = trashed;
    }
  }

  //Add a new task to local storage
  function addTask() {
    let nextTaskID = allTasks.length;
    const taskName = $('.task-name input').value;
    const theTask = new Task(nextTaskID, taskName, false);
    allTasks.push(theTask);
    localStorage.setItem('Tasks', JSON.stringify(allTasks));
    outputHTML(nextTaskID, taskName);
    $('.task-name input').value = "";

    //Need to fix below
    const deleteButton = document.querySelectorAll('.task button.delete')[nextTaskID];
    //Listen for the single delete button
    deleteButton.addEventListener('click', function (event) {
      allTasks.splice(this.id,1);
      location.reload();
    });
  }

  //Get all tasks from local storage
  function getAllTasks () {
    if (localStorage.length > 0) {
      const tasks = JSON.parse(localStorage.getItem('Tasks'));
      for (let i = 0; i < tasks.length; i++) {
        let nextTask = new Task(tasks[i].id, tasks[i].name, tasks[i].trashed);
        let nextTaskID = tasks[i].id;
        let nextTaskName = tasks[i].name;
        allTasks.push(nextTask);
        outputHTML(nextTaskID, nextTaskName);
      }
    }
  }

  //Delete all tasks
  function deleteAllTasks () {
    localStorage.clear();
    location.reload();
  }

  //Output the task
  function outputHTML (id, task) {
    const outputID = id;
    const outputTask = task;
    taskList.insertAdjacentHTML(`beforeend`, `<p class="task">${outputTask}<button id ="${outputID}" class="delete button" type="button">Delete</button></p>`);
  }

  getAllTasks();
});
