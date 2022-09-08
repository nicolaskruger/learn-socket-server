import type {ToDo} from '@dto/todo';
import {Server} from 'socket.io';

const port = 3333;

type ToDoList = {
	todos: ToDo[];
};

const io = new Server(port, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
		allowedHeaders: ['my-custom-header'],
		credentials: false,
	},
});

const toDoList: ToDoList = {
	todos: [],
};

io.on('connection', socket => {
	socket.emit('update', toDoList.todos);

	socket.on('add', arg => {
		const todo: ToDo = {
			id: Math.random(),
			done: false,
			text: arg as string,
		};
		const {todos} = toDoList;
		toDoList.todos = [todo, ...todos];
		io.emit('update', toDoList.todos);
	});

	socket.on('toggle', arg => {
		const {todos} = toDoList;
		const id = arg as number;
		toDoList.todos = todos.map(todo => {
			if (todo.id === id) {
				return {...todo, done: !todo.done};
			}

			return {...todo};
		});
		io.emit('update', toDoList.todos);
	});
});
