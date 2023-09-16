import Hash from '@ioc:Adonis/Core/Hash'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'

export default class UsersController {
  public async index() {}

  public async register({ request, response, auth }: HttpContextContract) {
    const payload = await request.validate(CreateUserValidator)
    const user = await User.create(payload)

    const token = await auth.use('api').generate(user)

    return response.json({ user, token })
  }

  public async show({ params, response }) {
    const payload = params.id
    const user = await User.findOrFail(payload)

    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }

    return response.status(200).json({ user })
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(email, password)

      return response.status(200).json({
        message: 'Login success',
        token: token.tokenHash,
        user: {
          id: token.user.id,
          email: token.user.email,
        },
      })
    } catch (error) {
      return response.badRequest(error.message)
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').revoke()

    return response.json({ message: 'Logout success' })
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
