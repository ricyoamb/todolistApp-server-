const router = require('express').Router();
const userRoute = require('./user.route');
// const taskRoute = require('./task.route');
// const todoRoute = require('./todo.route');

router.use('/api/users', userRoute);
// router.use('/api/todo', todoRoute);
// router.use('/api/tasks', taskRoute);

module.exports = router;
