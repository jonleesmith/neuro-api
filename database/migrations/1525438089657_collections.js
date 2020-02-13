'use strict'

const Schema = use('Schema')

class CollectionSchema extends Schema {

	up () {
		this.create('collections', (table) => {
            table.increments()
            table.string('name').notNull()
            table.string('handle').notNull()
            table.text('description').nullable()
            table.string('status', 64).default('active')
            table.boolean('managed').default(true)
            table.boolean('hidden').default(false)
            table.boolean('single').default(false)
            table.integer('project_id').unsigned().references('id').inTable('projects').onDelete('cascade')
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
			table.timestamps()
		})
	}

	down () {
		this.drop('collections')
	}

}

module.exports = CollectionSchema
