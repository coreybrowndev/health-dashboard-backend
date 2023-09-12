import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  public schema = schema.create({
    email: schema.string([rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string({}, [rules.minLength(8)]),
  })

  public messages: CustomMessages = {}

  constructor(protected ctx: HttpContextContract) {}
}
