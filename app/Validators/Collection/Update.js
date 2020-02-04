'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Update extends BaseValidator {

    get rules()
    {
        return {
            type: 'required',
        }
    }

}

module.exports = Update
