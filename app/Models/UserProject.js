'use strict'

const Model = use('Model')

class UserProject extends Model {

    projects()
    {
        return this.belongsTo('App/Models/Project')
    }

    user()
    {
        return this.belongsTo('App/Models/User')
    }

}

module.exports = UserProject
