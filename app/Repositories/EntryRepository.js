
const BaseRepository = use('App/Repositories/BaseRepository')

class EntryRepository extends BaseRepository {

    modelName() {
        return 'App/Models/Entry'
    }

}

module.exports = EntryRepository
