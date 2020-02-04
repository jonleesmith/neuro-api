'use strict'

const Schema = use('Schema')

class CollecetionFieldsetSchema extends Schema {

	up () {
		this.create('collection_fieldsets', (table) => {
			table.increments()
			table.integer('collection_id').unsigned().references('id').inTable('collections').onDelete('cascade')
			table.string('name').notNull()
            table.text('description').nullable()
			table.json('options').default('{}')
			table.integer('order').default(0)
			table.timestamps()
		})
	}

	down () {
		this.drop('collection_fieldsets')
	}

}

module.exports = CollecetionFieldsetSchema
