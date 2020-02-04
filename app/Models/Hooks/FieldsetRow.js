'use strict'

const Attribute = use('App/Models/Attribute')
const AttributeOption = use('App/Models/AttributeOption')

const FieldsetRowHook = exports = module.exports = {}

FieldsetRowHook.getAttributeOptions = async (rows) => {

    for ( let i = 0; i < rows.length; i++ )
    {

        let row = rows[i].toJSON();

        if ( row.field && row.field.type == 'Attribute' )
        {

            const attribute = await Attribute.findByOrFail({
                handle: row.field.options.type
            })

            const attrOptions = await attribute.options()
                .where('org_id', '=', row.org_id)
                .orderBy('name', 'asc')
                .fetch()

            rows[i].attributes = attrOptions.toJSON()

        }

    }

}
