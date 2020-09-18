'use strict'

class ProjectsController {


    async show({ request, response, project })
    {
        await project.loadMany(['collections'])
        return response.withItem(project);
    }


}

module.exports = ProjectsController
