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

    Route.get('/collections', 'ElementController.index')
    Route.get('/collections/create', 'ElementController.create')
    Route.post('/collections', 'ElementController.save')
    Route.get('/collections/:collection', 'ElementController.show').middleware('rmb:Neuro/CollectionRepository,element')
    Route.put('/collections/:collection', 'ElementController.update').middleware('rmb:Neuro/CollectionRepository,element')
    Route.delete('/collections/:collection', 'ElementController.delete').middleware('rmb:Neuro/CollectionRepository,element')

    Route.get('/entries', 'ElementController.index')
    Route.post('/entries', 'ElementController.save')
    Route.get('/entries/:collection', 'ElementController.entries').middleware('rmb:Neuro/CollectionRepository,collection,handle')
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

}).prefix(':site').middleware([])
