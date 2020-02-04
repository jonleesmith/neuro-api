'use strict'

const Schema = use('Schema')

class CollectionSchema extends Schema {

	up () {
		this.create('collections', (table) => {
			table.increments()
			table.integer('site_id').unsigned().references('id').inTable('sites').onDelete('cascade')
			table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
            table.string('name').notNull()
            table.string('uid', 36).unique().index().notNull()
			table.timestamps()
		})
	}

	down () {
		this.drop('collections')
	}

}

module.exports = CollectionSchema
