import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VerifyOwner {
  public async handle({ auth, params, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const user = auth.user

    const token = auth.use('api').token

    if (user?.id !== token?.userId) {
      return response.status(403).json({ message: 'You are not allowed to perform this action' })
    }
    await next()
  }
}
