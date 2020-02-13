'use strict'

const Schema = use('Schema')

class ProjectsSchema extends Schema {

	up () {
		this.create('projects', (table) => {
			table.increments()
            table.string('name').notNull()
            table.string('handle').unique().notNull()
            table.string('uid', 36).unique().notNull()
			table.timestamps()
		})
	}

	down () {
		this.drop('projects')
	}

}

module.exports = ProjectsSchema
