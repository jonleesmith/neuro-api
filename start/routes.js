'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/

const Route = use('Route')

Route.group(() => {

    // Authentication
    Route.post('auth/register', 'AuthController.register')
    Route.post('auth/login', 'AuthController.login')

})

Route.group(() => {

    Route.get('auth/me', 'AuthController.me');
    Route.get('auth/me/projects', 'AuthController.projects');
    Route.post('auth/logout', 'AuthController.logout')

}).middleware(['auth'])

Route.group(() => {

    Route.get('/', 'ProjectsController.show')
        .middleware('rmb:Project,project,uid')

    Route.get('/collections/', 'CollectionsController.index')
        .middleware('rmb:Project,project,uid')

    Route.post('/collections/', 'CollectionsController.store')
        .middleware('rmb:Project,project,uid')

    Route.get('/collections/:collection/', 'CollectionsController.show')
        .middleware('rmb:Collection,collection,uid')

    Route.put('/collections/:collection/', 'CollectionsController.update')
        .middleware('rmb:Collection,collection')

    Route.delete('/collections/:collection/', 'CollectionsController.delete')
        .middleware('rmb:Collection,collection')

        // here
    Route.get('/:collection/entries/', 'EntriesController.collection')
        .middleware('rmb:Collection,collection,uid')

    Route.post('/:collection/entries/', 'EntriesController.store')
        .middleware('rmb:Collection,collection,uid')

    Route.put('/:collection/entries/:entry', 'EntriesController.update')
        .middleware('rmb:Neuro/EntryRepository,entry,id')

    Route.delete('/:collection/entries/:entry', 'EntriesController.delete')
        .middleware('rmb:Neuro/EntryRepository,entry,id')


    Route.get('/entries', 'EntriesController.index')
    // Route.put('/entries/:collection', 'ElementController.update').middleware('rmb:Collection,element')
    // Route.delete('/entries/:collection', 'ElementController.delete').middleware('rmb:Collection,element')

    // GET /:project/enries/:collection
   // GET /:project/enries/:collection/:id
   // POST /:project/enries/:collection
   // PATCH /:project/enries/:collection/:id
   // DELETE /:project/enries/:collection/:id
   // GET /:project/enries/:collection/:id/revisions
   // GET /:project/enries/:collection/:id/revisions/:offset
   // PATCH /:project/enries/:collection/:id/revert/:revision

}).prefix(':project')
//.middleware('rmb:Project,project,uid')
