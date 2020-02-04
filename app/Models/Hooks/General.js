'use strict'

const uuid = require('uuid/v4')
const shortid = require('shortid')
const { sanitizor } = use('Validator')

const GeneralHook = module.exports = {}

GeneralHook.addUUID = async (model) => {
    model.uuid = uuid()
}

GeneralHook.generateShortIDUrl = async (model) => {
    if ( ! model.url )
    {
        model.url = shortid.generate()
    }
}

GeneralHook.generateHandle = async (model) => {

    if ( !model.handle )
    {
        model.handle = sanitizor.slug(model.name).replace(/-/g, '_')
    }

}

GeneralHook.generateUniqueID = async (model) => {

    if ( !model.uuid )
    {
        model.uuid = `${model.org_id}_${model.handle}`
    }

}
