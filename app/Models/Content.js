'use strict'

const Model = use('Model')

class Content extends Model {


    static get table() {
        return 'content'
    }

    entry()
    {
        return this.hasOne('App/Models/Entry')
    }

}

module.exports = Content
