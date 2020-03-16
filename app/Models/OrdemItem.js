'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrdemItem extends Model {

    //Por esse método statico ele sabe que o meu model não tem a definição do timestamps definido na migration
    static get traits(){
        return['App/Models/Traits/NoTimestamp']
    }

    product(){
        return this.belongsTo('App/Models/Product')
    }

    order(){
        return this.belongsTo('App/Models/Order')
    }

}

module.exports = OrdemItem
