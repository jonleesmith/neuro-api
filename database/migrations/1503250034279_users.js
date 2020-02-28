'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {

    up () {
        this.create('users', table => {
            table.increments()
            table.string('name', 255).nullable()
            table.string('email', 255).notNullable().unique()
            table.string('password', 60).notNullable()
            table.datetime('last_login').nullable()
            table.integer('role_id').unsigned().references('id').inTable('roles')
            table.timestamps()
        })
    }

    down () {
        this.drop('users')
    }

}

module.exports = UserSchema
