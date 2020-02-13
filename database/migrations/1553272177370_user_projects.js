'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSiteSchema extends Schema {

    up () {
        this.create('user_projects', (table) => {
            table.increments()
            table.integer('project_id').unsigned().references('id').inTable('projects').onDelete('cascade')
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
            table.timestamps()
        })
    }

    down () {
        this.drop('user_projects')
    }

}

module.exports = UserSiteSchema
