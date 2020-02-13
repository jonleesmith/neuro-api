'use strict'

const Schema = use('Schema')

class FieldsSchema extends Schema {

    up () {
        this.create('fields', (table) => {
            table.increments()
            table.integer('collection_id').unsigned().references('id').inTable('collections').onDelete('cascade')
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
            table.string('name').notNull()
            table.string('handle').notNull()
            table.string('type').notNull()
            table.string('interface').notNull()
            table.json('options').default('{}')
            table.boolean('locked').default(false)
            table.string('validation').nullable()
            table.boolean('required').default(false)
            table.boolean('readonly').default(false)
            table.boolean('hidden_screen').default(false)
            table.boolean('hidden_browse').default(false)
            table.float('order', 131072, 16383)
            table.text('note').nullable()
            table.timestamps()
        })
    }

  down () {
    this.drop('fields')
  }
}

module.exports = FieldsSchema
