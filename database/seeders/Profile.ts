import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Profile from 'App/Models/Profile'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    // eslint-disable-next-line prettier/prettier
    await Database.table('profiles').insert([
      {
        user_id: 1,
        first_name: 'Charley',
        last_name: 'Endis',
        city: 'Muncie',
        state: 'Indiana',
        birthdate: DateTime.fromISO('2000-03-07').toSQLDate(),
        gender: 'Male',
        height: 170.18,
        weight: 180,
        pre_fix: '+',
        country_code: '1',
        phone_number: '7655555555',
        join_date: DateTime.fromISO('2021-01-01').toSQLDate(),
      },
      {
        user_id: 2,
        first_name: 'Sally',
        last_name: 'May',
        city: 'Muncie',
        state: 'Indiana',
        birthdate: DateTime.fromISO('2002-05-10').toSQLDate(),
        gender: 'Female',
        height: 160.02,
        weight: 120,
        pre_fix: '+',
        country_code: '1',
        phone_number: '7651111212',
        join_date: DateTime.fromISO('2021-01-01').toSQLDate(),
      },
      {
        user_id: 3,
        first_name: 'John',
        last_name: 'Doe',
        city: 'Muncie',
        state: 'Indiana',
        birthdate: DateTime.fromISO('2001-08-07').toSQLDate(),
        gender: 'Male',
        height: 180.34, //Stored in inches
        weight: 200,
        pre_fix: '+',
        country_code: '1',
        phone_number: '7654445555',
        join_date: DateTime.fromISO('2021-01-01').toSQLDate(),
      },
    ])
  }
}
