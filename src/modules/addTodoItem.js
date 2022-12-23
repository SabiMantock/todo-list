import deleteTodo from './deleteTodo.js';
import { removeTodo } from './storeTodo.js';

const list = document.getElementById('lists');
const addTodoItem = (todo) => {
  list.innerHTML += `
<li id=${todo.index}  class="listItem" completed=${false}>

    <div class="listItemWrapper" >
        <input type="checkbox" name="" id="checkbox" />
       
    </div>
     <input value="${todo.description}" type="text" class="edit"/>
    <button type="button" class="todoBtn" onclick="remove(${todo.index})">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12.025 21.15q-1 0-1.7-.7t-.7-1.675q0-1 .7-1.7t1.675-.7q1 0 1.688.7.687.7.687 1.7 0 .975-.687 1.675-.688.7-1.663.7Zm0-6.775q-1 0-1.7-.7T9.625 12q0-1 .7-1.688.7-.687 1.675-.687 1 0 1.688.687.687.688.687 1.663 0 1-.687 1.7-.688.7-1.663.7Zm0-6.75q-1 0-1.7-.713-.7-.712-.7-1.687 0-1 .7-1.688.7-.687 1.675-.687 1 0 1.688.687.687.688.687 1.688 0 .975-.687 1.687-.688.713-1.663.713Z" /></svg>
    </button>
</li>
  `;
};

window.remove = (index) => {
  deleteTodo(index);
  removeTodo(index);
};

export default addTodoItem;