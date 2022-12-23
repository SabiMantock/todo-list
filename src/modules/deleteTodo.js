const deleteTodo = (index) => {
  const todoIndex = document.getElementById(index);
  todoIndex.remove();
};

export default deleteTodo;
