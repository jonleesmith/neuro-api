'use strict'

const { ServiceProvider } = require('@adonisjs/fold')


async function bindModels(request, next, [repository, param, column]) {
    const value = request.params[param];
    if ( value )
    {
        request[param] = await use(repository).findOne(value);
    }
    await next();
}

class RouteModelBindingServiceProvider extends ServiceProvider {

    /**
    * Register namespaces to the IoC container
    *
    * @method register
    *
    * @return {void}
    */
    register () {
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

        const Route = use('Route')
        const Server = use('Server');

        Server.registerNamed({ rmb: bindModels });

        Route.Route.macro('bind', function (model, param, column) {
            this.middleware(`rmb:${model},${param},${column}`);
            return this
        })

    }

}

module.exports = RouteModelBindingServiceProvider
