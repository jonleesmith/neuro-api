'use strict'

const Hash = use('Hash')

const { sanitizor } = use('Validator')

const UserHook = module.exports = {}

/**
 * Hash using password as a hook.
 *
 * @method
 *
 * @param  {Object} userInstance
 *
 * @return {void}
 */
UserHook.hashPassword = async (model, updated) => {
    if ( model.password )
    {
        model.password = await Hash.make(model.password)
    }
}


UserHook.updatePasswordHash = async (model, i) => {
    let newPassword = model.$attributes.password

    if ( newPassword )
    {
        model.password = await Hash.make(newPassword)
    }
    else {
        model.password = model.$originalAttributes.password
    }

}
