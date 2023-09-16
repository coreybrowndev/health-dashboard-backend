import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'vitalsigns'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
      table.integer('user_id').unsigned().notNullable()
      table.double('blood_pressure')
      table.integer('heart_rate')
      table.decimal('temperature')
    })

    this.schema.alterTable(this.tableName, (table) => {
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
    })
  }

  public async down() {
    const exists = await this.schema.hasTable(this.tableName)
    this.schema.dropTableIfExists(this.tableName)

    this.schema.alterTable(this.tableName, (table) => {
      if (exists) {
        table.dropForeign(['user_id'])
      }
    })
  }
}
