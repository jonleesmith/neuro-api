'use strict'

const SurveyFieldset = use('App/Models/SurveyFieldset')

const TemplateHook = exports = module.exports = {}

TemplateHook.generateMeta = async ( template ) => {

    if ( !template.status ) {
        template.status = 'active'
    }

    if ( !template.subject ) {
        template.subject = template.name
    }
    if ( !template.body )
    {
        template.body = `<p>Dear {{ client_name }},</p>\n\n<p>Providing you with a great service is our number one priority.  We would be very grateful if you could answer this short survey to let us know how we are doing, so that we can continue to improve the experience we give you.</p>\n\n<p>You can access the survey at the link below and it should take just a couple of minutes.</p>\n\n{{{ button }}}`
    }

}

TemplateHook.setDefaultOptions = async ( template ) => {

    if ( !template.options )
    {
        template.options = {
            alertEmail: '',
            allowAnnonymous: true,
            fieldsets: []
        }
    }

}

// whenever a find is called on the Template model, we just grab the selectedFieldsets for that template
TemplateHook.getSelectedFieldsets = async (template) => {

    let fieldsets = [];

    let fieldsetIds = template.options.fieldsets

    if ( !fieldsetIds.length )
    {
        fieldsetIds = await SurveyFieldset.query().where('survey_id', template.survey_id).orderBy('order', 'asc').ids()
    }

    for ( let i = 0; i < fieldsetIds.length; i++ )
    {
        let fieldset = await SurveyFieldset.find(fieldsetIds[i])
        await fieldset.load('rows.field')
        fieldsets.push(fieldset.toJSON())
    }

    template.selectedFieldsets = fieldsets
}

TemplateHook.getAllTemplateRows = async ( template ) => {

    let rows = [];
    for ( let i = 0; i < template.selectedFieldsets.length; i++ )
    {
        let set = template.selectedFieldsets[i];
        for ( let j = 0; j < set.rows.length; j++ )
        {
            let row = set.rows[j]
            rows.push(row)
        }
    }
    template.rows = rows
}


TemplateHook.setFieldModel = async ( template ) => {

    let model = {}

    for ( let i = 0; i < template.rows.length; i++ )
    {
        let row = template.rows[i]
        model[row.field.handle] = row.field.model
    }

    template.model = model

}
