'use strict'

const Model = use('Model')

class Field extends Model {

    static boot() {
        super.boot()
    }

    static get computed() {
        return ['model']
    }

    site() {
        return this.belongsTo('App/Models/Site')
    }

    getModel() {
        return ''
    }

}

module.exports = Field
