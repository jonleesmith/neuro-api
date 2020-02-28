'use strict'

const Model = use('Model')

class Field extends Model {

    project()
    {
        return this.belongsTo('App/Models/Project')
    }

    collection() {
        return this.belongsTo('App/Models/Collection')
    }

}

module.exports = Field
