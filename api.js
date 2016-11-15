import { Router } from 'express';

const router = new Router();

const userList = {
  users: [
    { avator: 'http://xxx.com', name: 'John', age: 23 },
    { avator: 'http://xxx.com', name: 'Amy', age: 18 },
  ],
};

// Write your restful api here:
router.get('/users', (req, res) => {
  res.send(JSON.stringify(userList));
});

router.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id === 1 || id === 2) {
    res.send(JSON.stringify(userList.users[id - 1]));
  } else {
    res.send(JSON.stringify({}));
  }
});


export default router;
