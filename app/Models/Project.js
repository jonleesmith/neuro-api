'use strict'

const Model = use('Model')

class Project extends Model
{

    collections()
    {
        return this.hasMany('App/Models/Collection')
    }

    entries()
    {
        return this.hasMany('App/Models/Entry')
    }

    users()
    {
        return this.hasMany('App/Models/User')
    }

}

module.exports = Project
