'use strict'

const Schema = use('Schema')

class RelationSchema extends Schema {

    up () {
        this.create('relations', (table) => {
            table.increments()
            table.integer('source_id').unsigned().references('id').inTable('entries').onDelete('cascade')
            table.integer('target_id').unsigned().references('id').inTable('entries').onDelete('cascade')
            table.float('order').default('1.00')
            table.timestamps()
        })
    }

    down () {
        this.drop('relations')
    }
}

module.exports = RelationSchema
