import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { GenderSelection } from 'App/Controllers/Http/ProfilesController'

export default class UpdateProfileValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    user_id: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'users', column: 'id' }), // ensures user_id exists in 'users' table
    ]),
    first_name: schema.string.optional({ trim: true }, [rules.minLength(2), rules.maxLength(255)]),
    last_name: schema.string.optional({ trim: true }, [rules.minLength(2), rules.maxLength(255)]),
    city: schema.string.nullableAndOptional({ trim: true }, [rules.maxLength(255)]),
    state: schema.string.nullableAndOptional({ trim: true }, [rules.maxLength(255)]),
    birthdate: schema.date.optional(),
    gender: schema.enum.optional(Object.values(GenderSelection)),
    height: schema.number.optional(),
    weight: schema.number.optional(),
    pre_fix: schema.string.optional({ trim: true }),
    country_code: schema.string.optional({ trim: true }),
    phone_number: schema.string.optional({ trim: true }, [rules.maxLength(55)]),
    img_url: schema.string.optional({ trim: true }, [rules.url()]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
