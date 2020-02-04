'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Update extends BaseValidator {

    get rules()
    {
        return {
            email: `required|email|unique:users,email,id,${this.ctx.params.user}`,
            password: `required_if:change_password|min:6|confirmed`,
        }
    }

}

module.exports = Update
