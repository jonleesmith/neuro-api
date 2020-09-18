'use strict'


const Schema = use('Schema')

class ContentSchema extends Schema {

    up () {
        this.create('content', (table) => {
            table.increments()
        })
    }

    down () {
        this.drop('content')
    }

}

module.exports = ContentSchema
