'use strict'

const Model = use('Model')

class UserSite extends Model {

    sites() {
        return this.belongsTo('App/Models/Sites')
    }

    user() {
        return this.belongsTo('App/Models/User')
    }

}

module.exports = UserSite
