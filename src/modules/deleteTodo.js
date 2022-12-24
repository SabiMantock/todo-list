const deleteTodo = (index) => {
  const todoIndex = document.getElementById(`todo${index}`);
  todoIndex.remove();
};

export default deleteTodo;
