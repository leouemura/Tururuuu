const connection = require('../database/connection');
const crypto = require('crypto');
const fundamentusPapel = require('../scrapping/FundPapelScrapping');

//tentei fzr uma função q retorna os métodos... mas ai sla n entendi como usar isso como um método no src/routes.js dps q eu exportava hehehe

/*
const testController = () => {
     let papel;
    const myAsyncFunc = (result) => {
        papel = result;
        console.log(papel)
    }
    fundamentusPapel(2).then(myAsyncFunc).then(create) 
    return {
        async create(req,res){
            await connection('papel').insert({
                papel
            })
    
            return res.json({
                papel
            });
        },
    
        async index(req,res){
            const lista_papel = await connection('papel').select('*');
            return res.json(lista_papel)
        },

        async delete(req,res){
            const { papel } = req.params;
            await connection('papel').where('papel',papel).delete();
            return res.status(200).send("Papel deletado");
        }
    }
    
 }
module.exports = testController, metodoTest;
*/