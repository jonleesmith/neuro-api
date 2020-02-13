'use strict'

const Model = use('Model')

class Collection extends Model {

    static boot()
    {
		super.boot();

        this.addHook('beforeCreate', 'General.addUUID');
        this.addHook('beforeCreate', 'General.generateHandle')
    }
    
    static get primaryKey () {
        return 'handle'
    }

    static get fillable()
    {
        return ['name', 'uid']
    }

    fieldsets()
    {
		return this.hasMany('App/Models/CollectionFieldset').orderBy('order', 'asc');
	}

    project()
    {
        return this.belongsTo('App/Models/Project')
    }

}

module.exports = Collection
