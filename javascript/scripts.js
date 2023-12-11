/**
 * TODOS
 * 1. Work on creating a new tag
 * 2. Work on changing background color in javascript instead of depending on css classes
 * 3. Work on filtering to forexample display only work to-do lists
 * 4. Work on making the form to be empty and not start from the last fill
 * 5. Adding calendar to left
 */


// keeping track of them for filtering

var all_tasks = [];
var work_tasks = [];
var personal_tasks = [];
var health_tasks = [];

// Display the pop up menu when create is clicked

const create = document.getElementById("create");

create.addEventListener('click', ()=>{
    var pop_up = document.getElementById('pop_up');

    pop_up.style.display = 'flex';
    create.style.display = 'none';
});

// dictionary to predict colors

let colors = {
    'work': '#C38AF2',
    'personal': '#56A675',
    'health': '#14B0CC'
};

// creating a task element

function createElement(color, tag)
{
    // creating the task container

    var task_container = document.createElement('div');
    task_container.classList.add ('task_container', tag);

    // creating the checkbox and paragraph we need in the task_container

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'unchecked';

    var label = document.createElement('label');

    // appending the children to task container

    task_container.appendChild(checkbox);
    task_container.appendChild(label);

    // styling task container before returning it

    task_container.style.paddingLeft = '30px'

    // appending 
    // task_container.style.background_color = color;
    
    return task_container;
}


// Function to add task

function addTask()
{
    // taking the values from the forms

    var task = document.getElementById("task").value;
    var tag = document.getElementById("tag").value;
    var color = colors[tag];

    // taking the right section

    const right = document.getElementById('right');

    let todo = createElement(color, tag);
    todo.querySelector('label').innerHTML = task;
    right.appendChild(todo);

    pop_up.style.display = 'none';
    create.style.display = 'block';

    let no_tasks = document.getElementById('no_tasks');
    no_tasks.style.display = 'none';

    all_tasks.push(task);
    console.log(all_tasks);
}