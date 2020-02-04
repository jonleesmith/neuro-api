'use strict'

const Model = use('Model')

class CollectionFieldset extends Model {

    collection() {
        return this.belongsTo('App/Models/Collection')
    }

	rows() {
		return this.hasMany('App/Models/FieldsetRow').orderBy('order', 'asc');
	}

}

module.exports = CollectionFieldset
