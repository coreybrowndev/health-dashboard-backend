import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VitalSignValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    user_id: schema.number([
      rules.unsigned(),
      rules.exists({ table: 'users', column: 'id' }), // ensures user_id exists in 'users' table
    ]),
    blood_pressure: schema.number([rules.unsigned()]),
    heart_rate: schema.number([rules.unsigned()]),
    temperature: schema.number([rules.unsigned()]),
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

export class UpdateVitalSignValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    user_id: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'users', column: 'id' }), // ensures user_id exists in 'users' table
    ]),
    blood_pressure: schema.number.optional([rules.unsigned()]),
    heart_rate: schema.number.optional([rules.unsigned()]),
    temperature: schema.number.optional([rules.unsigned()]),
  })
}
