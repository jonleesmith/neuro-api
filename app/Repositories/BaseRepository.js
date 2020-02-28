
class BaseRepository {

    modelName()
    {
        return 'App/Models/Project'
    }

    constructor(app)
    {
        this.setModel()
    }

    setModel()
    {
        this.model = use(this.modelName())
    }

    async findOne(id)
    {
        return await this.findOneBy({ 'id': id });
    }

    async findOneBy(col, val)
    {
        return await this.model.findByOrFail(col, val)
    }

    findIn(key, values)
    {
        return this.model.query().whereIn(key, values).get();
    }

    findBy(criteria)
    {
        let self = this
        let queryBuilder = this.model.query().where( function() {
            self.applySearchCriteriaInQueryBuilder(this, criteria);
        });
        return queryBuilder
    }

    applySearchCriteriaInQueryBuilder(query, criteria)
    {

        console.log(criteria)

        for ( let key in criteria )
        {

            let value = criteria[key]

            // skip pagination related query params
            if ( ['page', 'limit'].includes(key) )
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

    save(data)
    {
        return this.model.create(data);
    }

    update(data)
    {
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
