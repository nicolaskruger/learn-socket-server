import {Server} from 'socket.io';

const port = 3333;

const io = new Server(port);

io.on('connection', socket => {
	socket.emit('hello', 'world');

	socket.on('howdy', arg => {
		console.log(arg);
	});
});
