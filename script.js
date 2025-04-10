function addTodo() {
  const input = document.getElementById("todoInput");
  const list = document.getElementById("todoList");

  if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  }
}
