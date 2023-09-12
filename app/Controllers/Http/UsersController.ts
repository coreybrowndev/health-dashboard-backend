import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'

export default class UsersController {
  public async index() {}

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateUserValidator)
    const user = await User.create(payload)
    return response.json(user)
  }

  public async destroy({ params, response }) {
    const payload = params.id
    const user = await User.findOrFail(payload)

    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }

    await user.delete()

    return response.status(200).send({ message: 'User deleted' })
  }
}
