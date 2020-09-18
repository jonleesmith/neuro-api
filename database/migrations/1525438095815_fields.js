'use strict'

const Schema = use('Schema')

class FieldsSchema extends Schema {

    up () {
        this.create('fields', (table) => {
            table.increments()
            table.integer('project_id').unsigned().references('id').inTable('projects').onDelete('cascade')
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
            table.string('type').notNull()
            table.string('name').notNull()
            table.string('uid').notNull()
            table.text('instructions').nullable()
            table.json('options').default('{}')
            table.json('validation').default('{ "rules": [] }')
            table.boolean('readonly').default(false)
            table.boolean('hidden_screen').default(false)
            table.boolean('hidden_browse').default(false)
            table.float('order').default('1.00')
            table.boolean('global').default(false)
            table.timestamps()
        })
    }

  down () {
    this.drop('fields')
  }
}

module.exports = FieldsSchema
