'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 200)
      table.integer('image_id').unsigned()
      table.text('description')
      table.decimal('price', 12,2)
      table.timestamps()

      table.foreign('image_id').references('id').inTable('images').onDelete('cascade')
    })

    //CRIADO A TABELA PIVO, POIS PRODUTO VAI TER UMA GALERIA DE IMAGENS
    this.create('image_product', (table)=>{
      table.increments()
      table.integer('image_id').unsigned()
      table.integer('product_id').unsigned()
      table.timestamps()

      table.foreign('image_id').references('id').inTable('images').onDelete('cascade')
      table.foreign('product_id').references('id').inTable('products').onDelete('cascade')
    })

    //TABELAS PIVO SÃO SEMPRE MAPEADAS PELO O ORM LUCID, NÃO PRECISANDO DE MODEL DO MESMO
    //OS NOMES SÃO SEMPRE POR ONDE ALFABETICA DOS MODELS RELACIONADOS C_P POR EXEMPLO
    this.create('category_product', (table)=>{
      table.increments()
      table.integer('category_id').unsigned()
      table.integer('product_id').unsigned()
      table.timestamps()

      table.foreign('category_id').references('id').inTable('categories').onDelete('cascade')
      table.foreign('product_id').references('id').inTable('products').onDelete('cascade')
    })
  }

  down () {
    //COLOCA A ORDEM INVERSA PARA DROPAR, PORQUE FOI CRIADO POR ULTIMO E VAI SER EXCLUIDO PRIMEIRO
    this.drop('category_product')
    this.drop('image_product')
    this.drop('products')
   
    
  }
}

module.exports = ProductSchema
