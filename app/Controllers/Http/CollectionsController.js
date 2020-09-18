'use strict'


// const CollectionRepository = use('Neuro/CollectionRepository')
const Database = use('Adonis/Src/Database')
const Collection = use('App/Models/Collection')

const { validateAll } = use('Validator')

class CollectionsController
{

    async index({ request, response, project })
    {
        let params = request.except(['page', 'limit'])
        params.project_id = project.id
        let elements = neuro.collections.findBy(params)
        let options = request.only(['page', 'limit']);
        return response.withPagination(elements, options)
    }

    // async store({ request, response, params, project })
    // {
    //     console.log(project)

    //     let name = request.input('name')
    //     let fields = request.input('fields')
    //     // console.log(Database.Config)
    //     // return
    //     if (name)
    //     {
    //         await Database.schema.table('content', (table) => {
    //             // console.log(table)
    //             // table.increments()

    //             fields.forEach((field) => {

    //                 table.string(field).nullable()

    //             })

    //         })
    //         console.log(`collection ${name} create`)
    //     }

    //     return response.withItem({ name, fields })
    // }

    async show({ request, response, auth, collection })
    {
        // const user = await auth.getUser()

        // $id = $request -> entryTypeId;

        // $entryType = $this -> entryTypeRepository -> findOne($id);

        // if (!$entryType instanceof EntryType) {
        //     return $this -> sendNotFoundResponse("The entryType with id {$id} doesn't exist");
        // }

        // // Authorization
        // $this -> authorize('show', $entryType);

        // return $this -> respondWithItem($entryType, $this -> entryTypeTransformer);

        // Authorization
        // request.authorize('show', user, collection);
        await collection.load('fields')

        return response.withItem(collection);
    }

    async entries({ request, response, params, collection })
    {

        // let elements = this.collections.findBy(request.all())
        // let options = request.only(['page', 'limit']);
        // return response.withPagination(elements, options)


        let elements = neuro.entries.findBy(request.all())
        // let options = request.only(['page', 'limit']);
        return response.withPagination(elements, {})


        // let options = request.only(['page', 'limit']);

        // let entries = await this.entries.findBy({
        //     collection_id: collection.id
        // })
        // // entries = entries.loadMany(['content'])
        // // console.log(collection)
        // return response.withPagination(entries, options)
    }

    async store({ request, response, auth, project })
    {

        const user = await auth.getUser()

        let attributes = request.all();

        let validation = await validateAll(attributes, {
            'name': 'required',
            'uid': 'required',
        })

        if ( validation.fails() )
        {
            return response.withErrors(validation.messages())
        }

        attributes.project_id = project.id
        attributes.user_id = user.id

        const collection = await neuro.collections.save(attributes)

        return response.withItem(collection)

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
