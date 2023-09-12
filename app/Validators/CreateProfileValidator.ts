import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { GenderSelection } from 'App/Controllers/Http/ProfilesController'

export default class CreateProfileValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    user_id: schema.number([
      rules.unsigned(),
      rules.exists({ table: 'users', column: 'id' }), // ensures user_id exists in 'users' table
    ]),
    first_name: schema.string({ trim: true }, [rules.minLength(2), rules.maxLength(255)]),
    last_name: schema.string({ trim: true }, [rules.minLength(2), rules.maxLength(255)]),
    city: schema.string.nullableAndOptional({ trim: true }, [rules.maxLength(255)]),
    state: schema.string.nullableAndOptional({ trim: true }, [rules.maxLength(255)]),
    birthdate: schema.date(),
    gender: schema.enum(Object.values(GenderSelection)),
    height: schema.number(),
    weight: schema.number(),
    pre_fix: schema.string.nullableAndOptional({ trim: true }),
    country_code: schema.string.nullableAndOptional({ trim: true }),
    phone_number: schema.string.nullableAndOptional({ trim: true }, [rules.maxLength(55)]),
    img_url: schema.string.optional({ trim: true }, [rules.url()]),
  })

  public messages: CustomMessages = {}
}
