'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Store extends BaseValidator {

    get rules()
    {
        return {
            name: 'required'
        }
    }

}

module.exports = Store
