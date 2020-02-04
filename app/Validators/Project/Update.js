'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Update extends BaseValidator {

    get rules()
    {
        return {
            uuid: `required|unique:orgs,uuid,id,${this.ctx.params.org}`
        }
    }

}

module.exports = Update
