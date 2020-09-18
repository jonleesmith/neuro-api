
class BaseRepository {

    defaultIncludes = []

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

    findBy(criteria) {
        let _self = this
        let queryBuilder = this.model.query()

        this.defaultIncludes.forEach(relation => {
            queryBuilder.with(relation)
        })
        queryBuilder.where(function () {
            _self.applySearchCriteriaInQueryBuilder(this, criteria);
        });
        return queryBuilder
    }

    applySearchCriteriaInQueryBuilder(query, criteria)
    {

        console.log(criteria)

        for ( let key in criteria )
        {

            let value = criteria[key]

            // we can pass multiple params for a filter with commas
            let allValues = value.split(',');
            if ( allValues.length )
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

    {
        return this.model.create(data);
    }

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

 {
        // return model.delete();
    }

}

module.exports = BaseRepository
