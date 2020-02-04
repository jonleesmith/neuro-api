'use strict'

const Schema = use('Schema')

class FieldsSchema extends Schema {

    up () {
        this.create('fields', (table) => {
            table.increments()
            table.integer('site_id').unsigned().references('id').inTable('sites').onDelete('cascade')
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
            table.string('name').notNull()
            table.string('handle').notNull()
            table.text('instructions').nullable()
            table.string('type').notNull()
            table.json('settings').default('{}')
            table.timestamps()
        })
    }

  down () {
    this.drop('fields')
  }
}

module.exports = FieldsSchema
