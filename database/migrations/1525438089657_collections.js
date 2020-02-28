'use strict'

const Schema = use('Schema')

class CollectionSchema extends Schema {

	up () {
		this.create('collections', (table) => {
            table.increments()
            table.integer('project_id').unsigned().references('id').inTable('projects').onDelete('cascade')
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
            table.string('name', 128).notNull()
            table.string('handle').notNull()
            table.text('description').nullable()
            table.float('order').default('1.00')
            table.boolean('has_status').default(true)
            table.boolean('has_versions').default(true)
            table.string('default_status').default('published')
            table.string('date_behaviour', 64).default('published_at')
            table.boolean('custom_order', 64).default(false) // order by date or manaully (drag n drop)
            table.string('order_direction', 64).default('desc') // manual (desc/asc)
			table.timestamps()
		})
	}

	down () {
		this.drop('collections')
	}

}

module.exports = CollectionSchema
