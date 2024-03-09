


let todos = []


let addTextField = document.getElementById('todo_txt')

let todoList = document.getElementById('todo-list')

function AddTodo() {


    if (addTextField.value === '') {
        alert('Please add the todo')
    }
    else {
        let value = {
            id: todos.length,
            todoItem: addTextField.value
        }

        todos.push(value)
        TODOLIST()
        addTextField.value = ''

    }

}


function TODOLIST() {

    let text = ''

    todos.forEach((value) => {

        text += `
        <div class="todo_item">
            <div class="todo_text">
                <p>${value.todoItem}</p>
            </div>
            <div class="todo_actions">
                <button onclick="DeleteTODO(${value.id})">Delete</button> 
            </div>
        </div>
`

    })
    todoList.innerHTML = text

}




function DeleteTODO(id) {

    todos = todos.filter((item) => item.id !== id)
    TODOLIST()
}