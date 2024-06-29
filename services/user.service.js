const { User } = require('../models/users')

class UserService {
  static async getAllUsers() {
    try {
      const foundUsers = await User.findAll()
      if (!foundUsers) {
        throw new Error('No users found service')
      }
      return foundUsers
    } catch (err) {
      console.log('catch service error')
    }
  }
}

module.exports = UserService
