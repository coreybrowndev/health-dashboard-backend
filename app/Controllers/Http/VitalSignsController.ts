// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import VitalSign from 'App/Models/VitalSign'
import VitalSignValidator, { UpdateVitalSignValidator } from 'App/Validators/VitalSignValidator'

export default class VitalSignsController {
  public async index({}) {}

  public async show({ request, response }) {
    const { id } = request.params()
    const vitalSign = await VitalSign.findOrFail(id)
    return await response.status(200).json(vitalSign)
  }

  public async store({ params, request, response }) {
    const userId = params.id
    await User.findOrFail(userId)
    const payload = await request.validate(VitalSignValidator)
    const vitalSign = await VitalSign.create(payload)

    await vitalSign.save()

    return response.status(201).json(vitalSign)
  }

  public async update({ auth, params, request, response }) {
    const userId = auth.user?.id
    const vitalSignId = params.id

    if (!userId) {
      return response.status(401).json({ message: 'Unauthorized' })
    }

    const vitalSign = await VitalSign.findOrFail(vitalSignId)

    if (vitalSign.user_id !== userId) {
      return response.status(403).json({ message: 'Forbidden' })
    }

    const payload = await request.validate(UpdateVitalSignValidator)
    vitalSign.merge(payload)
    await vitalSign.save()
    return response.status(200).json(vitalSign)
  }
}
