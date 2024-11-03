class Todo {
	constructor(task) {
			this.task = task;
			this.completed = false;
	}

	toggleComplete() {
			this.completed = !this.completed;
	}
}

class TodoList {
	constructor() {
			this.todos = [];
			this.todoInput = document.getElementById('todo-input');
			this.todoList = document.getElementById('todo-list');
			this.addButton = document.getElementById('add-btn');

			this.addButton.addEventListener('click', () => this.addTodo());
	}

	addTodo() {
			const taskText = this.todoInput.value.trim();
			if (taskText === '') return;

			const todo = new Todo(taskText);
			this.todos.push(todo);
			this.render();
			this.todoInput.value = ''; // Очистка поля ввода
	}

	removeTodo(index) {
			this.todos.splice(index, 1);
			this.render();
	}

	toggleTodoCompletion(index) {
			this.todos[index].toggleComplete();
			this.render();
	}

	render() {
			this.todoList.innerHTML = ''; // Очищаем текущий список

			this.todos.forEach((todo, index) => {
					const li = document.createElement('li');
					li.className = todo.completed ? 'completed' : '';
					li.textContent = todo.task;

					li.addEventListener('click', () => this.toggleTodoCompletion(index));

					const deleteBtn = document.createElement('button');
					deleteBtn.textContent = 'Delete';
					deleteBtn.className = 'delete';
					deleteBtn.onclick = () => this.removeTodo(index);

					li.appendChild(deleteBtn);
					this.todoList.appendChild(li);
			});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new TodoList();
});