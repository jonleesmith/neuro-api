'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSiteSchema extends Schema {

    up () {
        this.create('user_sites', (table) => {
            table.increments()
            table.integer('site_id').unsigned().references('id').inTable('sites').onDelete('cascade')
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
            table.timestamps()
        })
    }

    down () {
        this.drop('user_sites')
    }

}

module.exports = UserSiteSchema
