'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Store extends BaseValidator {

    get rules()
    {
        return {
            email: 'required|email|unique:users,email',
            password: 'required|min:6|confirmed',
        }
    }

}

module.exports = Store
