'use strict'

const Schema = use('Schema')

class FieldsSchema extends Schema {

    up () {
        this.create('fields', (table) => {
            table.increments()
            table.integer('collection_id').unsigned().references('id').inTable('collections').onDelete('cascade')
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
            table.string('type').notNull()
            table.string('name').notNull()
            table.string('handle').notNull()
            table.text('instructions').nullable()
            table.json('options').default('{}')
            table.boolean('locked').default(false)
            table.boolean('required').default(false)
            table.json('validation').default('{ "rules": [] }')
            table.boolean('readonly').default(false)
            table.boolean('hidden_screen').default(false)
            table.boolean('hidden_browse').default(false)
            table.float('order').default(1.0)
            table.timestamps()
        })
    }

  down () {
    this.drop('fields')
  }
}

module.exports = FieldsSchema
