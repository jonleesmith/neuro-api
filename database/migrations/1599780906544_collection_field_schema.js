'use strict'

const Schema = use('Schema')

class CollectionFieldSchema extends Schema {

    up () {
        this.create('collection_fields', (table) => {
            table.increments()
            table.integer('collection_id').unsigned().references('id').inTable('collections').onDelete('cascade')
            table.integer('field_id').unsigned().references('id').inTable('fields').onDelete('cascade')
            table.string('label').nullable()
            table.text('instructions').nullable()
            table.boolean('required').default(false)
            table.json('presentation').default('{}')
            table.timestamps()
        })
    }

    down () {
        this.drop('collection_fields')
    }
}

module.exports = CollectionFieldSchema
