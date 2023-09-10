import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public user_id: number

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public birthdate: DateTime

  @column()
  public gender: string

  //Will convert on frontend to centimeters from feet and inches
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

  @belongsTo(() => User, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  public user: BelongsTo<typeof User>
}
