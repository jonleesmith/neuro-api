'use strict'

const Model = use('Model')

class User extends Model {

    static boot () {
        super.boot()

        /**
        * A hook to hash the user password before saving
        * it to the database.
        **/
        this.addHook('beforeCreate', 'User.hashPassword')
        this.addHook('beforeUpdate', 'User.updatePasswordHash')

        this.addTrait('Policy');

    }

	static get hidden () {
		return ['password']
	}

	static get computed () {
		return ['firstname']
	}

    getFirstname ({ name })
    {
		return ( name ) ? name.split(/ /g)[0] : ''
	}

    tokens ()
    {
		return this.hasMany('App/Models/Token')
	}

    role()
    {
		return this.belongsTo('App/Models/Role')
	}

    permissions()
    {
        return this.belongsToMany('App/Models/Permission').pivotTable('user_permissions')
    }

    projects()
    {
        return this.belongsToMany('App/Models/Project').pivotTable('user_projects')
    }

    can()
    {
        return true
    }

}

module.exports = User
