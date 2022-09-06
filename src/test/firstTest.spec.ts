import type {User} from '@dto/user';

test('it shoud be ok', () => {
	const user: User = {
		name: 'nicolas',
	};

	expect(user.name).toBe('nicolas');
});
