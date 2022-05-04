import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Partidas extends BaseSchema {
  protected tableName = 'partidas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id1').unsigned().references('id').inTable('user')
      table.integer('pantalla1_px')
      table.integer('pantalla1_status')
      table.integer('user_id2').unsigned().references('id').inTable('user')
      table.integer('pantalla2_px')
      table.integer('pantalla2_status')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
