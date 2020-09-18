'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

const ErrorsFormatter = use('App/Validation/ErrorsFormatter')

const EntryRepository = use('App/Repositories/EntryRepository')
const CollectionRepository = use('App/Repositories/CollectionRepository')

const UnauthorizedAccessException = use('App/Exceptions/UnauthorizedAccessException')

const { validateAll } = use('Validator')

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

        Request.macro('authorize', this.authorizeMacro)
        Request.macro('validate', this.validateMacro)

        Response.macro('withErrors', this.withErrorsMacro)
        Response.macro('withItem', this.withItemMacro)
        Response.macro('withPagination', this.withPaginationMacro)
        // Model.castDates = this.castDatesMacro

        const neuro = {}
        neuro.entries = new EntryRepository()
        neuro.collections = new CollectionRepository()

        global.neuro = neuro

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

    withErrorsMacro(errors, status)
    {
        status = status || 422
        this.status(status)
        return this.json({
            status,
            errors
        })
    }

    authorizeMacro(action, user, model)
    {
        if ( !user.can(action, model) ) {
            throw new UnauthorizedAccessException()
        }
        return true
    }

    async validateMacro(data, rules)
    {
        console.log(data, rules)

        const validation = await validateAll(data, rules)

        if (validation.fails())
        {
            throw new Error(validation.messages())
        }

    }

}

module.exports = AppServiceProvider
