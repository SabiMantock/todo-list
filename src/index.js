import addTodoItem from './modules/addTodoItem.js';
import { addTodo, getTodo, updateTodo } from './modules/storeTodo.js';
import './style.css';

const display = () => {
  const todos = getTodo() || [];
  if (todos) {
    todos.map((todo) => addTodoItem(todo));
  }
};

display();

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const todos = getTodo();
  const todoInput = document.getElementById('task').value;
  const todoTasks = {
    index: todos.length,
    description: todoInput,
    completed: false,
  };

  if (todoInput !== '') {
    addTodoItem(todoTasks);
    addTodo(todoTasks);
    document.getElementById('form').reset();
  }
});

const inputField = document.querySelectorAll('.edit');

inputField.forEach((todo, index) => {
  todo.addEventListener('change', (e) => {
    const updateInput = e.target.value;
    const todos = getTodo();
    todos[index].description = updateInput;
    updateTodo(index, todos[index].description);
    window.location.reload();
  });
});
inputField.forEach((todo, index) => {
  todo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const updateInput = e.target.value;
      const todos = getTodo();
      todos[index].description = updateInput;
      updateTodo(index, todos[index].description);
      window.location.reload();
    }
  });
});
