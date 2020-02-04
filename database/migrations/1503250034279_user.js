'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {

    up () {
        this.create('users', table => {
            table.increments()
            table.integer('role_id').unsigned()
            table.string('account_status', 50).notNull().default('pending')
            table.string('name', 255).nullable()
            table.string('username', 255).notNullable().unique()
            table.string('email', 255).notNullable().unique()
            table.string('password', 60).notNullable()
            table.datetime('last_login').nullable()
            table.timestamps()
        })
    }

    down () {
        this.drop('users')
    }

}

module.exports = UserSchema
