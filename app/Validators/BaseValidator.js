"use strict"

class BaseValidator {

    get validateAll()
    {
        return true
    }

    async fails(errorMessages)
    {
        return this.ctx.response.sendWithErrors(errorMessages, 422);
    }

    get messages()
    {
        return {
            'required': 'This field is required',
            "confirmed": "Please confirm your password",
            "unique": 'Sorry, that has already been taken',
            'email': 'Please enter a valid email address'
        }
    }

    get sanitizationRules()
    {
        return {
            email: 'normalize_email',
        }
    }

}

module.exports = BaseValidator
