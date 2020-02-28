'use strict'

const Model = use('Model')

class Collection extends Model {

    static get primaryKey ()
    {
        return 'handle'
    }

    static get fillable()
    {
        return ['name', 'handle']
    }

    project()
    {
        return this.belongsTo('App/Models/Project')
    }

    entries() {
        return this.belongsTo('App/Models/Entry')
    }

}

module.exports = Collection
