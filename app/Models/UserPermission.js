'use strict'

const Model = use('Model')

class UserPermission extends Model {

    permissions()
    {
        return this.belongsTo('App/Models/Permission')
    }

    user()
    {
        return this.belongsTo('App/Models/User')
    }

}

module.exports = UserPermission
