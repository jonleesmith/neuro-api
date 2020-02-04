'use strict'

const Model = use('Model')

class Site extends Model
{

    static boot() {
        super.boot()
    }

    users() {
        return this.hasMany('App/Models/User')
    }

}

module.exports = Site
