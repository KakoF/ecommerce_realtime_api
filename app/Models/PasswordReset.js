'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PasswordReset extends Model {
    //Por usar um hook(gancho) precisa bootar a classe
    static boot() {
        super.boot()
        
        //Antes de ser criado na base de dados
        this.addHook('beforeCreate', async model => {
            model.token = await str_random(25)
            const expires_at = new Date()
            expires_at.setMinutes(expires_at.getMinutes() + 30)
            model.expires_at = expires_at
        })
    }
    
    //formata os valores para o padrão do banco
    static get dates() {
        return ['created_at', 'updated_at', 'expires_at']
    }
   
}

module.exports = PasswordReset
