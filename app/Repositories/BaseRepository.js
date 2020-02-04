
class BaseRepository {

    modelName() {
        return 'App/Models/Site'
    }

    constructor(app) {
        this.setModel()
    }

    setModel() {
        this.model = use(this.modelName())
    }

    async findOne(id) {
        return await this.findOneBy({ 'id': id });
    }

    async findOneBy(criteria) {
        return await this.model.query().where(criteria);
    }

    findIn(key, values) {
        return this.model.query().whereIn(key, values).get();
    }

    findBy(criteria) {

        let _self = this
        let queryBuilder = this.model.query().where( function() {
            _self.applySearchCriteriaInQueryBuilder(this, criteria);
        });

        return queryBuilder
    }

    applySearchCriteriaInQueryBuilder(query, criteria) {

        for ( let key in criteria )
        {

            let value = criteria[key]

            // skip pagination related query params
            if ( ['page', 'perPage'].includes(key) )
            {
                continue;
            }

            // we can pass multiple params for a filter with commas
            let allValues = value.split(',');

            if ( allValues.length > 1)
            {
                query.whereIn(key, allValues);
            }
            else
            {
                let operator = '=';
                query.where(key, operator, value);
            }
        }

        return query;
    }

    save() {
        console.log(this.model.query().paginate(1))
        // if ( in_array('user_id', this.model.getFillable()) )
        // {
        //     data['user_id'] = this.getUser().id;
        // }

        // return this.model.create(data);
    }

    update() {
        // fillAbleProperties = this.model.getFillable();

        // foreach (data as key => value)
        // {

        //     // update only fillAble properties
        //     if ( in_array(key, fillAbleProperties) )
        //     {
        //         model.key = value;
        //     }

        // }

        // // update the model
        // model.save();

        // // get updated model from database
        // model = this.findOne(model.id);

        // return model;
    }

    delete(key) {
        // return model.delete();
    }

}

module.exports = BaseRepository
