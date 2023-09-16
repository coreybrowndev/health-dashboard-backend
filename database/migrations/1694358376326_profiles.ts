import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'profiles'

  public async up() {
    this.schema.createTableIfNotExists(this.tableName, (table) => {
      table.increments('id')
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
      // eslint-disable-next-line prettier/prettier
      table.integer('user_id').unsigned().notNullable()
      table.string('first_name')
      table.string('last_name')
      table.string('city')
      table.string('state')
      table.date('birthdate')
      table.string('gender')
      table.double('height')
      table.integer('weight')
      table.string('pre_fix')
      table.string('country_code')
      table.string('phone_number')
      table.timestamp('join_date').defaultTo(this.now())
      table.string('img_url')
    })
    this.schema.alterTable(this.tableName, (table) => {
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
    })
  }

  public async down() {
    const exists = await this.schema.hasTable(this.tableName)

    if (exists) {
      this.schema.dropTable(this.tableName)
    }
    this.schema.alterTable(this.tableName, (table) => {
      if (exists) {
        table.dropForeign('user_id')
      }
    })
  }
}
