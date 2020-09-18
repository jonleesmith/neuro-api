
const BaseRepository = use('App/Repositories/BaseRepository')

class EntryRepository extends BaseRepository {

    defaultIncludes = ['collection', 'content']

    modelName() {
        return 'App/Models/Entry'
    }

}

module.exports = EntryRepository
