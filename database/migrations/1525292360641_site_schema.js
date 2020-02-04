'use strict'

const Schema = use('Schema')

class SiteSchema extends Schema {

	up () {
		this.create('sites', (table) => {
			table.increments()
            table.string('name').notNull()
            table.string('handle').unique().notNull()
            table.string('uid', 36).unique().notNull()
			table.timestamps()
		})
	}

	down () {
		this.drop('sites')
	}

}

module.exports = SiteSchema
