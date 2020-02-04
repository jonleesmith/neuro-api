'use strict'

const Model = use('Model')

class Permission extends Model {

    user() {
        return this.belongsTo('App/Models/UserPermission')
    }

}

module.exports = Permission
