
const BaseRepository = use('App/Repositories/BaseRepository')

class CollectionRepository extends BaseRepository {

    defaultIncludes = ['fields']

    modelName() {
        return 'App/Models/Collection'
    }


}

module.exports = CollectionRepository
