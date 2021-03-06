'use strict'

const Schema = use('Schema')

class RoleSchema extends Schema {

	up () {
		this.create('roles', (table) => {
			table.increments()
            table.string('name', 128).notNull()
			table.text('description').nullable()
			table.timestamps()
		})
	}

	down () {
		this.drop('roles')
	}

}

module.exports = RoleSchema
