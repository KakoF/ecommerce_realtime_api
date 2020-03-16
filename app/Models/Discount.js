'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

//MODEL DE DESCONTO NÃO TEM UMA TABELA PROPRIA, O DESCONTO VAI FICAR NO PIVO ENTRE CUPOM E PEDIDO
class Discount extends Model {
    static get table(){
        return 'coupon_order'
    }

    order(){
        return this.belongsTo('App/Models/Order', 'order_id', 'id')
    }
    
    coupon(){
        return this.belongsTo('App/Models/Coupon', 'coupon_id', 'id')
    }
}

module.exports = Discount
