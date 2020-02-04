'use strict'

const Schema = use('Schema')

class UserPermissionSchema extends Schema {

    up () {
        this.create('user_permissions', (table) => {
            table.increments()
            table.integer('permission_id').unsigned().references('id').inTable('permissions')
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
            table.timestamps()
        })
    }

    down () {
        this.drop('user_permissions')
    }

}

module.exports = UserPermissionSchema
