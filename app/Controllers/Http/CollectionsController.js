'use strict'

const Collection = use('App/Models/Collection')
const Entry = use('App/Models/Entry')
const CollectionRepository = use('Neuro/CollectionRepository')
const EntryRepository = use('Neuro/EntryRepository')
const Database = use('Adonis/Src/Database')

class CollectionsController {

    constructor() {
        this.collections = CollectionRepository
        this.entries = EntryRepository
    }

    async index({ request, response, params })
    {
        let elements = this.collections.findBy(request.all())
        let options = request.only(['page', 'limit']);
        return response.withPagination(elements, options)
    }

    async create({ request, response, params, project })
    {
        console.log(project)
        let name = request.input('name')
        // console.log(Database.Config)
        // return
        if (name)
        {
            await Database.schema.table('content', (table) => {
                // console.log(table)
                table.string(name).nullable()
            })
            console.log(`collection ${name} create`)
        }

        return response.withItem({
            id: 'Hi',
            name: name,
        })
    }

    async show({ request, response, params, collection })
    {
        // Authorization
        request.authorize('show', collection);
        return response.withItem(collection);
    }

    async entries({ request, response, params, collection })
    {

        let elements = this.collections.findBy(request.all())
        let options = request.only(['page', 'limit']);
        return response.withPagination(elements, options)


        // let options = request.only(['page', 'limit']);

        // let entries = await this.entries.findBy({
        //     collection_id: collection.id
        // })
        // // entries = entries.loadMany(['content'])
        // // console.log(collection)
        // return response.withPagination(entries, options)
    }

    async store({ request, response, params })
    {

        // Validation
        // $validatorResponse = $this->validateRequest($request, $this->storeRequestValidationRules($request));

        // // Send failed response if validation fails
        // if ( $validatorResponse !== true )
        // {
        //     return $this->sendInvalidFieldResponse($validatorResponse);
        // }

        // $entryType = $this->entryTypeRepository->save($request->all());

        // if ( !$entryType instanceof EntryType )
        // {
        //     return $this->sendCustomResponse(500, 'Error occurred on creating EntryType');
        // }

        // return $this->setStatusCode(201)->respondWithItem($entryType, $this->entryTypeTransformer);

    }

    async update({ request, response, params })
    {
        // $id = $request->entryTypeId;

        // // Validation
        // $validatorResponse = $this->validateRequest($request, $this->updateRequestValidationRules($request));

        // // Send failed response if validation fails
        // if ( $validatorResponse !== true )
        // {
        //     return $this->sendInvalidFieldResponse($validatorResponse);
        // }

        // $entryType = $this->entryTypeRepository->findOne($id);

        // if ( !$entryType instanceof EntryType )
        // {
        //     return $this->sendNotFoundResponse("The entryType with id {$id} doesn't exist");
        // }

        // // Authorization
        // $this->authorize('update', $entryType);

        // $entryType = $this->entryTypeRepository->update($entryType, $request->all());

        // return $this->respondWithItem($entryType, $this->entryTypeTransformer);

    }

    async destroy({ request, response, params })
    {
        // $id = $request->entryTypeId;

        // $entryType = $this->entryTypeRepository->findOne($id);

        // if (!$entryType instanceof EntryType) {
        //     return $this->sendNotFoundResponse("The entryType with id {$id} doesn't exist");
        // }

        // // Authorization
        // $this->authorize('destroy', $entryType);

        // $this->entryTypeRepository->delete($entryType);

        // return response()->json(null, 204);
    }

}

module.exports = CollectionsController
