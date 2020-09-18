'use strict'

class EntriesController {

    index({ request, response })
    {
        let elements = neuro.entries.findBy(request.except(['page', 'limit']))
        let options = request.only(['page', 'limit']);
        return response.withPagination(elements, options)
    }

    collection({ request, response, collection })
    {
        let params = request.except(['page', 'limit'])
        params.collection_id = collection.id
        let elements = neuro.entries.findBy(params)
        // let options = request.only(['page', 'limit']);
        return response.withPagination(elements, {})
    }

    store({ request, response, collection })
    {
        const { fields } = request.only(['fields'])
        console.log(fields)

    }

    update({ request, response, entry })
    {
        console.log(entry)
    }




}

module.exports = EntriesController
