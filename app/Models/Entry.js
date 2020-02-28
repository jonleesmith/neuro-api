'use strict'

const Model = use('Model')

class Entry extends Model {

    collection()
    {
        return this.belongsTo('App/Models/Collection')
    }

    project()
    {
        return this.belongsTo('App/Models/Project')
    }

    author()
    {
        return this.hasOne('App/Models/User')
    }

    content()
    {
        return this.belongsTo('App/Models/Content')
    }

}

module.exports = Entry
