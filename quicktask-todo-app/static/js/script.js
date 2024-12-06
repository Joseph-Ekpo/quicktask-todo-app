document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Create a new task item
    const li = document.createElement('li');
    li.textContent = taskInput.value;

    // Add delete functionality
    li.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    // Add task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
});
