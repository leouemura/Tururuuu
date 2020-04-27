const connection = require('../database/connection');
const crypto = require('crypto');
const fundamentusPapel = require('../scrapping/FundPapelScrapping');

//ideia q n funciona: pegar o valor da ação e colocar um por um no banco de dados 
//(post é o método assincrono create que da um insert da variavel papel)

const ação = [];
const attributePapelValue = (result) => {
    ação.push(result);
    console.log(ação)
}

for (let n = 0; n < 5; n++) {
    fundamentusPapel(n).then(attributePapelValue)
}



 module.exports = {
    
    async create(req,res){
        await connection('papel').insert({
            papel
        })
    
        return res.json({
            papel
        })
    },
    
    async index(req,res){
        const lista_papel = await connection('papel').select('*');
        return res.json(lista_papel)
    },

    async delete(req,res){
        const { papel} = req.params;
        await connection('papel').where('papel',papel).delete();
        return res.status(200).send("Papel deletado");
    }
    
 }