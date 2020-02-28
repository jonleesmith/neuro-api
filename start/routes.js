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
    Route.post('auth/logout', 'AuthController.logout')

}).middleware(['auth'])

Route.group(() => {

    Route.get('/collections', 'CollectionsController.index')

    Route.get('/collections/create', 'CollectionsController.create')

    Route.post('/collections', 'CollectionsController.save')

    Route.get('/collections/:collection', 'CollectionsController.show')
        .middleware('rmb:Neuro/CollectionRepository,collection')

    Route.put('/collections/:collection', 'CollectionsController.update')
        .middleware('rmb:Neuro/CollectionRepository,collection')

    Route.delete('/collections/:collection', 'CollectionsController.delete')
        .middleware('rmb:Neuro/CollectionRepository,collection')

    Route.get('/entries/:collection', 'CollectionsController.entries')
        // .middleware('rmb:Neuro/CollectionRepository,collection,handle')


    Route.get('/entries', 'EntriesController.index')
    Route.post('/entries', 'EntriesController.store')
    // Route.put('/entries/:collection', 'ElementController.update').middleware('rmb:Neuro/CollectionRepository,element')
    // Route.delete('/entries/:collection', 'ElementController.delete').middleware('rmb:Neuro/CollectionRepository,element')

    // GET /:project/enries/:collection
   // GET /:project/enries/:collection/:d
   // POST /:project/enries/:collection
   // PATCH /:project/enries/:collection/:id
   // DELETE /:project/enries/:collection/:id
   // GET /:project/enries/:collection/:id/revisions
   // GET /:project/enries/:collection/:id/revisions/:offset
   // PATCH /:project/enries/:collection/:id/revert/:revision

}).prefix(':project').middleware([])
