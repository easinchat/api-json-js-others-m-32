// const { createElement } = require("react");

const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((pes) => pes.json())
    .then((data) => {
      //   console.log(data);
      displayTodo(data);
    });
};
const displayTodo = (todos) => {
  // ```````````````````````````````(step-1)````````````````````````````
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";

  todos.forEach((todo) => {
    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
    <div class="todo-card">
   <p>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</p>
  
  <h4>${todo.title}</h4>
</div>
    `;
    todoContainer.append(todoCard);
  });
};
loadTodo();
//  {
//     "userId": 1,
//     "id": 4,
//     "title": "et porro tempora",
//     "completed": true
//   },
