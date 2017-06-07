window.onload = function() {
  const addButton = document.querySelector('.add-task-button');
  const taskList = document.querySelector('.task-list');

  addButton.onclick = function(){
    let taskName = document.querySelector('.task-name input').value;
    localStorage.setItem('task', taskName);
    taskList.insertAdjacentHTML('beforeend','<p class="task">' + taskName + '</p>');
    taskName = "";
  }
}
