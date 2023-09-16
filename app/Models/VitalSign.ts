import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class VitalSign extends BaseModel {
  public static table = 'vitalsigns'

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public user_id: number

  @column()
  public blood_pressure: number

  @column()
  public heart_rate: number

  @column()
  public temperature: number

  @belongsTo(() => User, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  public user: BelongsTo<typeof User>
}
