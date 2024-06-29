const { getAllUsers } = require('../services/user.service')

class UserController {
  static async getAllUsers(req, res, next) {
    try {
      const users = await getAllUsers()

      if (!users) {
        return res.status(404).json({ message: 'No users found controller' })
      }

      res.status(200).json({ message: 'Get all Users success', data: users })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController
