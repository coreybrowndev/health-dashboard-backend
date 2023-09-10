import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      { email: 'user1@example.com', password: 'password' },
      { email: 'bobross919191@example.com', password: 'password' },
      { email: 'iambolt123@example.com', password: 'password' },
    ])
  }
}
