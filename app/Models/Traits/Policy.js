'use strict'

class Policy {

    register (Model, customOptions = {}) {

        Model.prototype.can = function(action, model) {
            let bindPolicy = null
            if ( typeof model === 'function' )  {
                // Static
                bindPolicy = model.policy
            }
            else {
                 // Object (Instance)
                bindPolicy = model.constructor.policy
            }
            if ( bindPolicy === null ) {
                return false
            }
            const ModelPolicy = use(bindPolicy)
            if (ModelPolicy[action] === undefined) {
                return false
            }
            return ModelPolicy[action](this, model)
        }

    }

}

module.exports = Policy
