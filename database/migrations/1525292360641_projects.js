'use strict'

const Schema = use('Schema')

class ProjectsSchema extends Schema {

	up () {
		this.create('projects', (table) => {
			table.increments()
            table.string('name', 128).notNull()
            table.string('uid').unique().notNull()
			table.timestamps()
		})
	}

	down () {
		this.drop('projects')
	}

}

module.exports = ProjectsSchema
