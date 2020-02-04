'use strict'

const Model = use('Model')

class Collection extends Model {

    static boot()
    {
		super.boot();

        this.addHook('beforeCreate', 'General.addUUID');
        this.addHook('beforeCreate', 'General.generateHandle')
	}

    static get fillable()
    {
        return ['name', 'uid']
    }

    fieldsets()
    {
		return this.hasMany('App/Models/CollectionFieldset').orderBy('order', 'asc');
	}

    rows()
    {
        return this.manyThrough('App/Models/CollectionFieldset', 'rows').orderBy('order', 'asc');
    }

    site()
    {
        return this.belongsTo('App/Models/Site')
    }

}

module.exports = Collection
