document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  
    // Listen for form submission
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent page refresh on submit
  
      // Get the task description input value
      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value.trim(); // Remove extra spaces
  
      // Ensure input is not empty
      if (taskText === "") {
        alert("Task description cannot be empty!");
        return;
      }
  
      // Create a new <li> element
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
  
      // Append the task to the task list
      taskList.appendChild(taskItem);
  
      // Clear the input field
      taskInput.value = "";
    // Listen for form submission";
  });
  
});
