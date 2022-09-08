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

/* Server client */

io.on('connection', socket => {
	socket.emit('hello', 'world');

	socket.on('howdy', arg => {
		console.log(arg);
	});
});

/* Server front */

// io.on('connection', socket => {
// 	socket.emit('message', 'hello');

// 	socket.on('message', arg => {
// 		console.log(arg);
// 		socket.emit('message', arg);
// 	});
// });
