'use strict'

const User = use('App/Models/User');
const Project = use('App/Models/Project');
const Role = use('App/Models/Role');
const shortid = require('shortid')

/*
|--------------------------------------------------------------------------
| NeuroSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class NeuroInitSeeder {

    async run () {

    	const superuser = await Role.create({
    		name: 'superuser'
    	})

        const users = await User.create({
    		role_id: superuser.id,
    		email: 'jonleesmith@me.com',
    		name: 'Jonathan Smith',
    		password: 'mpower21',
    	})

    }

}

module.exports = NeuroInitSeeder
