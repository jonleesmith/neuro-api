'use strict'

const Schema = use('Schema')

class SurveyFieldsetRowsSchema extends Schema {

	up () {
		this.create('collection_fieldset_rows', (table) => {
			table.increments()
            table.integer('site_id').unsigned().references('id').inTable('sites').onDelete('cascade')
			table.integer('collection_fieldset_id').unsigned().references('id').inTable('collection_fieldsets').onDelete('cascade')
			table.integer('field_id').unsigned().references('id').inTable('fields').onDelete('cascade')
			table.string('validation').nullable()
			table.integer('order').default(0)
			table.json('options').default('{}')
			table.timestamps()
		})
	}

	down () {
		this.drop('collection_fieldset_rows')
	}

}

module.exports = SurveyFieldsetRowsSchema
