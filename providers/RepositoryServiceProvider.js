'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const CollectionRepository = use('App/Repositories/CollectionRepository')

class RepositoryServiceProvider extends ServiceProvider {

    /**
    * Register namespaces to the IoC container
    *
    * @method register
    *
    * @return {void}
    */
    register () {

        this.app.bind('Neuro/CollectionRepository', function(app) {
            return new CollectionRepository()
        })

    // this.app.bind(SiteRepository::class, EloquentSiteRepository::class);
    // this.app.bind(UserRepository::class, EloquentUserRepository::class);
    // this.app.bind(CollectionTypeRepository::class, EloquentCollectionTypeRepository::class);
    // this.app.bind(FieldRepository::class, EloquentFieldRepository::class);
    //
    }

    /**
    * Attach context getter when all providers have
    * been registered
    *
    * @method boot
    *
    * @return {void}
    */
    boot () {
        // return [
        //     UserRepository::class,
        //     SiteRepository::class,
        //     CollectionTypeRepository::class,
        //     FieldRepository::class,
        // ];
    }

}

module.exports = RepositoryServiceProvider
