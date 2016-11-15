import { Router } from 'express';

const router = new Router();

const user_list = {
	users: [
		{ avator: 'http://xxx.com', name: 'John', age: 23 },
		{ avator: 'http://xxx.com', name: 'Amy', age: 18 },
	]
};

// Write your restful api here:
router.get('/users', (req, res) => {
	res.send(JSON.stringify(user_list));
});

router.get('/users/:id', (req, res) => {
	const id = parseInt(req.params.id);
	if (id === 1 || id === 2) {
		res.send(JSON.stringify(user_list.users[id - 1]));
	} else {
		res.send(JSON.stringify({}));
	}
});


export default router;
