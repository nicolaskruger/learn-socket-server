import type {Chat} from '@dto/chat';
import {Server} from 'socket.io';

const port = 3333;

const io = new Server(port, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
		allowedHeaders: ['my-custom-header'],
		credentials: false,
	},
});

io.on('connection', socket => {
	socket.on('chat', args => {
		const chat = args as Chat;

		const {name} = chat;

		io.emit(`chat-${name}`, chat);
	});
});
