import type {User} from '@dto/user';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
	const user: User = {
		name: 'sergio',
	};

	return res.json(user);
});

app.listen(3333);
