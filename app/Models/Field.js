'use strict'

const Model = use('Model')

class Field extends Model {

    static boot() {
        super.boot()
    }

    static get computed() {
        return ['model']
    }

    project() {
        return this.belongsTo('App/Models/Project')
    }

    getModel() {
        return ''
    }

}

module.exports = Field
