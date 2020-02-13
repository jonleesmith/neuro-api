'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PermissionSchema extends Schema {

    up () {
        this.create('permissions', (table) => {
            table.increments()
            table.integer('collection_id').unsigned().references('id').inTable('collections').onDelete('cascade')
            table.integer('role_id').unsigned().references('id').inTable('roles').onDelete('cascade')
            table.string('status', 64).nullable()
            table.string('create', 16).nullable()
            table.string('read', 16).nullable()
            table.string('update', 16).nullable()
            table.string('delete', 16).nullable()
            table.string('comment', 8).nullable()
            table.timestamps()
        })
    }

    down () {
        this.drop('permissions')
    }

}

module.exports = PermissionSchema
