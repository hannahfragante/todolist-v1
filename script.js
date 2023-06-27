//SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const filterAllBtn = document.querySelector(".all-btn");
const filterFinishedBtn = document.querySelector(".finished-btn");
const filterUnfinishedBtn = document.querySelector(".unfinished-btn");
const todoList = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clear-btn");

//EVENT LISTENERS
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterAllBtn.addEventListener("click", filterAll);
filterFinishedBtn.addEventListener("click", filterFinished);
filterUnfinishedBtn.addEventListener("click", filterUnfinished);
clearBtn.addEventListener("click", clearTodos);

//variables
let allToggle = true;
let finishedToggle = false;
let unfinishedToggle = false;

//FUNCTIONS
//adds a todo under todo-list
function addTodo(e) {
    //prevent form from refreshing the page when submitting
    e.preventDefault();

    if (todoInput.value === "") {
        alert("cant have an empty todo!");
    } else {
        //.todo DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //.todo li
        const todoItem = document.createElement("li");
        todoItem.innerText = todoInput.value;
        todoItem.classList.add("todo-item");
        todoDiv.appendChild(todoItem);

        //.todo .complete-btn
        const todoCompleteBtn = document.createElement("button");
        todoCompleteBtn.classList.add("complete-btn");
        todoCompleteBtn.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        todoDiv.appendChild(todoCompleteBtn);

        //.todo .trash-btn
        const todoTrashBtn = document.createElement("button");
        todoTrashBtn.classList.add("trash-btn");
        todoTrashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        todoDiv.appendChild(todoTrashBtn);

        //apend to ul .todo-list
        todoList.appendChild(todoDiv);
    }

    //clear todo input value
    todoInput.value = "";
}

//functionality when check mark or trash button is clicked
//trash removes todo item
//check makes it visible that it is done
function deleteCheck(e) {
    const item = e.target;
    //debug helpers
    // console.log(item);
    // console.log(item.classList[0]);
    // console.log(item.parentElement);

    const todoItemDiv = item.parentElement;
    //delete todo
    if (item.classList[0] === "trash-btn") {
        todoItemDiv.classList.add("fall");
        todoItemDiv.addEventListener("transitionend", function () {
            todoItemDiv.remove();
        });
    }

    //check todo (finished)
    if (item.classList[0] === "complete-btn") {
        todoItemDiv.classList.toggle("completed");
    }
}

//all filter
function filterAll(e) {
    const btn = e.target;
    console.log(btn);

    if (allToggle) {
        console.log("all already clicked");
    } else {
        console.log("all wasnt already clicked");
        if (finishedToggle) {
            console.log("finished was chosen");
            filterFinishedBtn.classList.toggle("filter-btn-clicked");
            finishedToggle = !finishedToggle;
        } else if (unfinishedToggle) {
            console.log("unfinished was chosen");
            filterUnfinishedBtn.classList.toggle("filter-btn-clicked");
            unfinishedToggle = !unfinishedToggle;
        }

        //filter todos here
        if (todoList.children.length != 0) {
            for (todo of todoList.children) {
                todo.style.display = "flex";
            }
        }

        filterAllBtn.classList.toggle("filter-btn-clicked");
        allToggle = !allToggle;
        console.log("all is now chosen");
    }
}

//finished filter
function filterFinished(e) {
    const btn = e.target;
    console.log(btn);

    if (finishedToggle) {
        console.log("finished already clicked");
    } else {
        console.log("finished wasnt already clicked");
        if (allToggle) {
            console.log("all was chosen");
            filterAllBtn.classList.toggle("filter-btn-clicked");
            allToggle = !allToggle;
        } else if (unfinishedToggle) {
            console.log("unfinished was chosen");
            filterUnfinishedBtn.classList.toggle("filter-btn-clicked");
            unfinishedToggle = !unfinishedToggle;
        }

        //filter todos here
        if (todoList.children.length != 0) {
            for (todo of todoList.children) {
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            }
        }

        filterFinishedBtn.classList.toggle("filter-btn-clicked");
        finishedToggle = !finishedToggle;
        console.log("finished is now chosen");
    }
}

//unfinished filter
function filterUnfinished(e) {
    const btn = e.target;
    console.log(btn);

    if (unfinishedToggle) {
        console.log("unfinished already clicked");
    } else {
        console.log("unfinished wasnt already clicked");
        if (allToggle) {
            console.log("all was chosen");
            filterAllBtn.classList.toggle("filter-btn-clicked");
            allToggle = !allToggle;
        } else if (finishedToggle) {
            console.log("finished was chosen");
            filterFinishedBtn.classList.toggle("filter-btn-clicked");
            finishedToggle = !finishedToggle;
        }

        //filter todos here
        if (todoList.children.length != 0) {
            for (todo of todoList.children) {
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            }
        }

        filterUnfinishedBtn.classList.toggle("filter-btn-clicked");
        unfinishedToggle = !unfinishedToggle;
        console.log("unfinished is now chosen");
    }
}

//delete all todos
function clearTodos(e) {
    console.log("WHOLE TODO LIST");
    console.log(todoList.children);

    if (todoList.children.length != 0) {
        while (todoList.children.length > 0) {
            const item = todoList.children[0];
            item.remove();
        }
    } else {
        alert("u got nothin on ur list bud");
    }
}
