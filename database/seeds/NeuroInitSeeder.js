'use strict'

const User = use('App/Models/User');
const Project = use('App/Models/Project');
const Role = use('App/Models/Role');
const Collection = use('App/Models/Collection');
const UserProject = use('App/Models/UserProject');

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

        const user = await User.create({
            role_id: superuser.id,
    		email: 'jonleesmith@me.com',
    		name: 'Jonathan Smith',
    		password: 'mpower21',
        })

        const project = await Project.create({
            name: 'Later',
            handle: 'later'
        })

        const user_project = await UserProject.create({
            user_id: user.id,
            project_id: project.id
        })

        const collection = await Collection.create({
            user_id: user.id,
            project_id: project.id,
            name: 'Bookmarks',
            handle: 'bookmarks',
            custom_order: true,
            order_direction: 'asc',
        })

    }

}

module.exports = NeuroInitSeeder
