'use strict'


const Schema = use('Schema')

class EntrySchema extends Schema {

    up () {
        this.create('entries', (table) => {
            table.increments()
            table.integer('collection_id').unsigned().references('id').inTable('collections').onDelete('cascade')
            table.integer('content_id').unsigned().references('id').inTable('projects').onDelete('cascade')
            table.integer('parent_id').unsigned().references('id').inTable('entries').onDelete('cascade')
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
            table.float('order').default('1.00')
            table.string('status', 128).nullable()
            table.datetime('published_at').nullable()
            table.datetime('archived_at').nullable()
            table.datetime('deleted_at').nullable()
            table.timestamps()
        })
    }

    down () {
        this.drop('entries')
    }

}

module.exports = EntrySchema
