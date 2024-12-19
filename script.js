const inputTask = document.querySelector('.input-task');
const submitTask = document.querySelector('.submit-task');
const tasks = document.querySelector('.tasks-list');
const checkedDo = document.querySelector('.checked-do');
const checkedTo = document.querySelector('.checked-to');
const checkboxSort = document.querySelector('.checkbox-sort');
let listTasks = [];

submitTask.addEventListener('click', (e) =>{
  e.preventDefault();
  value = inputTask.value;

  if(!!value.trim()) {
    const newTask = {
      task: value,
      do: false,
    }
    listTasks.push(newTask);
    inputTask.value ='';
    renderTasks();
  }
})

tasks.addEventListener('click', (event) =>{
  const element = event.target;
  if(element.classList.contains('task')) {
    listTasks = listTasks.filter((item) => item.task !== element.textContent.trim());
    const changedItem = {
      task:element.textContent,
      do:true,
    }
    listTasks.push(changedItem);
    renderTasks();
  }
  if(element.classList.contains('task-do')) {
    listTasks = listTasks.filter((item) => item.task !== element.textContent.trim());
    const changedItem = {
      task:element.textContent,
      do:false,
    }
    listTasks.push(changedItem);
    renderTasks();
  }
  if(element.classList.contains('delete')) {
    listTasks = listTasks.filter((item) => item.task !== element.parentElement.textContent);
    renderTasks();
  }
})

checkboxSort.addEventListener('change', function() {
  renderTasks();
})


function renderTasks() {
  tasks.textContent = '';
  listTasks.forEach((item) => {
    const newString = document.createElement('div');
    const newElement = document.createElement('div');
    const newDelete = document.createElement('div');
    newElement.textContent = item.task;
    newString.className = 'string';
    newElement.className = 'task';
    newDelete.className = 'delete';
    if (!!checkedDo.checked && !!checkedTo.checked) {
      if (!!item.do) {
      newElement.classList.add('task-do');
      tasks.append(newString);
      newString.prepend(newElement,newDelete);
      } else {
      tasks.prepend(newString);
      newString.prepend(newElement,newDelete);
      }
    }
    if (!checkedDo.checked && !!checkedTo.checked) {
      if (!item.do) {
      tasks.prepend(newString);
      newString.prepend(newElement,newDelete);
      }
    }
    if (!!checkedDo.checked && !checkedTo.checked) {
      if (!!item.do) {
      newElement.classList.add('task-do');
      tasks.append(newString);
      newString.prepend(newElement,newDelete);
      }
    }
  })
} 





