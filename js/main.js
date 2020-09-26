var todoService = new TodoService();

renderTaskList();

function renderTaskList() {
  todoService
    .getListTask()
    .then(function (result) {
      var contentTodo = "";
      var contentCompleted = "";
      getEle("todo").innerHTML = "";
      getEle("completed").innerHTML = "";
      if (result.data && result.data.length > 0) {
        result.data.forEach(function (item) {
          if (item.status === "todo") {
            contentTodo += renderListLiHtml(item);
            getEle("todo").innerHTML = contentTodo;
          } else if (item.status === "completed") {
            contentCompleted += renderListLiHtml(item);
            getEle("completed").innerHTML = contentCompleted;
          }
        });
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function renderListLiHtml(item) {
  return `<li>
    <span>${item.textTask}</span>
    <div class="buttons">
      <button
        class="remove"
        onclick="deleteToDo(${item.id})"
      >
        <i class="fa fa-trash-alt"></i>
      </button>
      <button
        class="complete"
        onclick="changeStatus(${item.id})"
      >
        <i class="far fa-check-circle"></i>
        <i class="fas fa-check-circle"></i>
      </button>
    </div>
  </li>`;
}

getEle("addItem").addEventListener("click", function () {
  var task = getEle("newTask").value;
  if (task === "") {
    alert("Task empty!");
    return;
  }

  var newTask = new Task(task, "todo");
  todoService
    .addTask(newTask)
    .then(function () {
      alert("Add Success!");
      renderTaskList();
      getEle("newTask").value = "";
    })
    .catch(function (err) {
      console.log(err);
    });
});

function deleteToDo(id) {
  todoService
    .deleteTask(id)
    .then(function () {
      alert("Delete Success!");
      renderTaskList();
    })
    .catch(function (err) {
      console.log(err);
    });
}

function changeStatus(id) {
  todoService
    .getTaskById(id)
    .then(function (result) {
      var task = result.data;
      task.status = task.status === "todo" ? "completed" : "todo";
      return todoService.updateTask(task);
    })
    .then(function () {
      alert("Change Status Success!");
      renderTaskList();
    });
}

function getEle(id) {
  return document.getElementById(id);
}
