'use strict'

const Request = use('Adonis/Src/Request')
const Template = use('App/Models/Template')

const SurveyHook = exports = module.exports = {}

SurveyHook.createTemplate = async (survey) => {

    const invite = await Template.create({
        survey_id: survey.id,
        org_id: survey.org_id,
        name: survey.name + ' Template',
        subject: survey.name,
    })

}
