function addTodo() {
  const input = document.getElementById("todoInput");
  const list = document.getElementById("todoList");

  if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("dblclick", () => {
      const newTask = prompt("Edit tugas:", li.textContent);
      if (newTask) li.textContent = newTask;
    });

    li.addEventListener("click", () => {
      confirm("Apakah Anda yakin ingin menghapus tugas ini?") && li.remove();
    });

    list.appendChild(li);
    input.value = "";
  }
}
