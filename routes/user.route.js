const { getAllUsers } = require('../controllers/user.controller')
const router = require('express').Router()

router.get('/', getAllUsers)
// router.get('/:id', getUserById);
// router.post('/', createUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

module.exports = router
