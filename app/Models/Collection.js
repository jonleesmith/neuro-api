'use strict'

const Model = use('Model')

class Collection extends Model {

    static get primaryKey()
    {
        return 'id'
    }

    static get fillable()
    {
        return ['name', 'handle']
    }

    project()
    {
        return this.belongsTo('App/Models/Project')
    }

    fields() {
        return this.belongsToMany('App/Models/Field').pivotTable('collection_fields')
    }

    entries() {
        return this.hasMany('App/Models/Entry')
    }

}

module.exports = Collection
