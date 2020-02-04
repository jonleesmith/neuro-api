
const BaseRepository = use('App/Repositories/BaseRepository')

class CollectionRepository extends BaseRepository {

    modelName() {
        return 'App/Models/Collection'
    }

}

module.exports = CollectionRepository
