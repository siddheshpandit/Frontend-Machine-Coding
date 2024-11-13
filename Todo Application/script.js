const todoInput = document.getElementById('todo-input');
const todoBtn = document.getElementById('todo-btn');
const todoList = document.getElementById('todo-list');
let editMode = false;
let editItem = null;
todoBtn.addEventListener('click',(e)=>{
    let value = todoInput.value.trim('');
    if(value!=''){
        if(editMode){
            editItem.firstChild.innerText=value;
            todoBtn.innerText='Add Todo';
            editMode=false;
            editItem=null;
        }
        else{
            addTodo(value);
        }
        todoInput.value=''
    }
    else{
        alert('Please Enter a Value');
    }
})

todoList.addEventListener('click',function(event){
    const target = event.target;
    if(event.target.tagName==='BUTTON'){
        const todoItem = target.parentNode;
        if(target.innerText==='Delete'){
            // Delete
            todoItem.remove();
        }
        else{
            const spanEle=todoItem.firstChild;
            todoInput.value=spanEle.innerText;
            editMode=true;
            editItem=todoItem;
            todoBtn.innerText='Edit Todo';
            todoInput.focus();
        }
    }
})
function addTodo(value){
    const node = document.createElement('li');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    node.innerHTML = `<span>${value}</span>`;
    editBtn.innerText="Edit"
    deleteBtn.innerText="Delete"
    node.appendChild(editBtn);
    node.appendChild(deleteBtn);
    todoList.appendChild(node);
}