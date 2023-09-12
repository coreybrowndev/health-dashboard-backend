// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'
import CreateProfileValidator from 'App/Validators/CreateProfileValidator'
import UpdateProfileValidator from 'App/Validators/UpdateProfileValidator'

export enum GenderSelection {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
  None = 'Prefer not to say',
}

export default class ProfilesController {
  public async index() {}

  public async show({ params, response }) {
    const payload = params.id
    const profile = await Profile.findOrFail(payload)

    if (!profile) {
      return response.status(404).json({ message: 'Profile not found' })
    }

    return response.status(200).json(profile)
  }

  public async store({ request, response }) {
    const payload = await request.validate(CreateProfileValidator)
    payload.birthdate = payload.birthdate.toISODate()
    const profile = await Profile.create(payload)
    return response.json(profile)
  }

  public async update({ params, request, response }) {
    const payload = await request.validate(UpdateProfileValidator)
    const profile = await Profile.findOrFail(params.id)

    if (payload.birthdate) {
      payload.birthdate = payload.birthdate.toISODate()
    }

    profile.merge(payload)

    await profile.save()

    return response.status(200).json(profile)
  }

  public async destroy({ params, response }) {
    const payload = params.id
    const profile = await Profile.findOrFail(payload)

    if (!profile) {
      return response.status(404).json({ message: 'Profile not found' })
    }

    await profile.delete()

    return response.status(200).send({ message: 'Profile deleted' })
  }
}
