
'use strict'

const Recipient = use('App/Models/Recipient')

const ResponseHook = exports = module.exports = {}

// Update the recipient status who filled out the response
ResponseHook.afterSave = async (response) => {

    if ( response.recipient_id )
    {
        let recipient = await Recipient.find(response.recipient_id)
        recipient.merge({
            status: 'complete',
            complete_date: Date.now()
        })
        await recipient.save()
    }

}
