'use strict'

const Model = use('Model')

class FieldsetRow extends Model {

    static boot() {
        super.boot()
    }

    // static get table() {
    //     return 'survey_fieldset_rows';
    // }

	fieldset() {
		return this.belongsTo('App/Models/SurveyFieldset')
	}

    field() {
        return this.hasOne('App/Models/Field', 'field_id', 'id');
    }

    getOptions(options) {
        return ( options ) ? options : {}
    }

}

module.exports = FieldsetRow
