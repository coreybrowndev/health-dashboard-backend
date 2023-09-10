import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Patient extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public phone: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public birthdate: DateTime

  @column()
  public gender: string

  @column()
  public height: number

  @column()
  public weight: number

  @column()
  public pre_fix: string

  @column()
  public country_code: string

  @column()
  public phone_number: string

  @column()
  public join_date: DateTime
}

module.exports = Patient
