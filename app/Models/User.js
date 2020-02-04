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

	getFirstname ({ name }) {
		return ( name ) ? name.split(/ /g)[0] : ''
	}

	/**
	* A relationship on tokens is required for auth to
	* work. Since features like `refreshTokens` or
	* `rememberToken` will be saved inside the
	* tokens table.
	*
	* @method tokens
	*
	* @return {Object}
	*/
	tokens () {
		return this.hasMany('App/Models/Token')
	}

	role() {
		return this.belongsTo('App/Models/Role')
	}

    isSuperUser() {
        return ( this.org_id == 1 )
    }

    permissions() {
        return this.belongsToMany('App/Models/Permission').pivotTable('user_permissions')
    }

    sites() {
        return this.belongsToMany('App/Models/Site').pivotTable('user_sites')
    }

    can() {

    }

}

module.exports = User
