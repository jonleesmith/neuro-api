'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

const ErrorsFormatter = use('App/Validation/ErrorsFormatter')

const UnauthorizedAccessException = use('App/Exceptions/UnauthorizedAccessException')

class AppServiceProvider extends ServiceProvider {

    /**
    * Attach context getter when all providers have
    * been registered
    *
    * @method boot
    *
    * @return {void}
    */
    boot ()
    {
        this.customErrorFormatter()

        const Response = use('Adonis/Src/Response');
        const Request = use('Adonis/Src/Request');
        const Model = use('Model')

        Response.macro('withErrors', this.withErrorsMacro)
        Request.macro('authorize', this.authorizeMacro)
        Response.macro('withItem', this.withItemMacro)
        Response.macro('withPagination', this.withPaginationMacro)
        Model.castDates = this.castDatesMacro

    }

    customErrorFormatter()
    {
        const Validator = use('Validator');
        Validator.configure({
            FORMATTER: ErrorsFormatter,
        })
    }


    async withItemMacro(data, options)
    {
        return this.json(data)
    }

    async withPaginationMacro(items, options)
    {
        let { page, limit } = options
        return await items.paginate(page, limit)
    }

    castDatesMacro(field, value)
    {
        let full = value.format('MMMM Do, YYYY');
        let timeAgo = value.fromNow(false);
        return `${ ( timeAgo.indexOf('month') != -1 ) ? full : `${timeAgo}` }`
    }

    withErrorsMacro(errors, status)
    {
        this.status(status)
        return this.json({
            status,
            errors
        })
    }

    authorizeMacro(action, user, model)
    {
        return true;
        // if ( !user.can(action, model) ) {
        //     throw new UnauthorizedAccessException()
        // }
    }

}

module.exports = AppServiceProvider
