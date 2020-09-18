
class ErrorsFormatter {

    constructor ()
    {
        this.errors = {}
    }

    addError (error, field, validation, args)
    {

        let message = error

        if ( error instanceof Error )
        {
            validation = 'ENGINE_EXCEPTION'
            message = error.message
        }

        message = this.customErrorMessage(error, field, validation, args)

        if ( !this.errors[field] )
        {
            this.errors[field] = []
        }

        this.errors[field].push(message)

    }

    toJSON ()
    {
        return Object.keys(this.errors).length === 0 ? null : this.errors
    }

    customErrorMessage (error, field, validation, args)
    {
        let message = error

        switch ( validation )
        {
            case 'required':
            message = 'This field is required.'
            break;
            case 'min':
            message = `Please enter at least ${args} characters.`
            break;
            case 'exists':
            message = 'We could not find a match'
            break
        }

        return message
    }

}

module.exports = ErrorsFormatter;
