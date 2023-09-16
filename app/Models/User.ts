import { DateTime } from 'luxon'
import { BaseModel, HasOne, beforeSave, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Profile from './Profile'
import VitalSign from './VitalSign'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @hasOne(() => Profile, {
    foreignKey: 'user_id',
  })
  public profile: HasOne<typeof Profile>

  @hasOne(() => VitalSign, {
    foreignKey: 'user_id',
  })
  public vitalSign: HasOne<typeof VitalSign>

  //Make sure passwords are hashed before saving to the database
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
