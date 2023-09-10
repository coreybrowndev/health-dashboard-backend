// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index() {}

  public async create({ request, response }) {
    const userData = request.only(['email', 'password'])
    const user = await User.create(userData)
    return response.json(user)
  }
}
