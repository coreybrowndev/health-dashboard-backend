import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import VitalSign from 'App/Models/VitalSign'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Database.table('vitalsigns').insert([
      { user_id: 1, blood_pressure: 120, heart_rate: 80, temperature: 98.6 },
      { user_id: 2, blood_pressure: 130, heart_rate: 75, temperature: 97.2 },
      { user_id: 3, blood_pressure: 140, heart_rate: 70, temperature: 98.4 },
    ])
  }
}
