const inputTask = document.querySelector('.input-task');
const submitTask = document.querySelector('.submit-task');
const TasksTo = document.querySelector('.tasks-to');
const TasksDo = document.querySelector('.tasks-do');
let ListTasks = [];

submitTask.addEventListener('click', (e) =>{
  e.preventDefault();
  value = inputTask.value;

  if(!!value.trim()) {
    const NewTask = {
      task: value,
      do: false,
    }
    ListTasks.push(NewTask);
    inputTask.value ='';
    renderTasks();
  }
 
})

TasksTo.addEventListener('click', (event) =>{
  const element = event.target;
  if(element.classList.contains('task')) {
    ListTasks = ListTasks.filter((item) => item.task !== element.textContent.trim());
    const changedItem = {
      task:element.textContent,
      do:true,
    }
    ListTasks.push(changedItem);
    renderTasks();
  }
  if(element.classList.contains('delete')) {
    ListTasks = ListTasks.filter((item) => item.task !== element.parentElement.textContent);
    renderTasks();
  }
})

TasksDo.addEventListener('click', (event) =>{
  const element = event.target;
  if(element.classList.contains('task')) {
    ListTasks = ListTasks.filter((item) => item.task !== element.textContent.trim());
    const changedItem = {
      task:element.textContent,
      do:false,
    }
    ListTasks.push(changedItem);
    renderTasks();
  }
  if(element.classList.contains('delete')) {
    ListTasks = ListTasks.filter((item) => item.task !== element.parentElement.textContent);
    renderTasks();
  }
})


function renderTasks () {
  TasksDo.textContent = '';
  TasksTo.textContent = '';
  ListTasks.forEach((item) => {
    const newString = document.createElement('div');
    const newElement = document.createElement('div');
    const newDelete = document.createElement('div');
    newElement.textContent = item.task;
    newString.className = 'string';
    newElement.className = 'task';
    newDelete.className = 'delete';
    if (item.do) {
        newElement.classList.add('task-do');
        TasksDo.prepend(newString);
        newString.prepend(newElement,newDelete);
      } else {
        TasksTo.prepend(newString);
        newString.prepend(newElement,newDelete);
      }
  })
}

function deleteTask(){
  const deleteElement = element.parentElement.textContent;
  ListTasks = ListTasks.filter((item) => item.task == deleteElement);
}



