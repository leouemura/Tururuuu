const connection = require('../database/connection');
const crypto = require('crypto');
const arrayPapel = require('../scrapping/arrayPapelScrapping');

//ideia q n funciona: pegar o valor da ação e colocar um por um no banco de dados 
//(post é o método assincrono create que da um insert da variavel papel)

//PROBLEMA1 : COM DOIS ASYNC AWAIT: A primeira execução n roda pq papel === NULL... e eu n permito isso no parametro do sqlite (olhar na src/database/migration/202004..._create_papel.js)
// apos cancelar a requisição no insomnia e dar send dnv, o bagulho funciona e da o insert... mas n rola deixar assim 
//PROBLEMA 2: COM UM ASYNC AWAIT no primeiro connection('papel'): roda mais bonito mas parece n efetuar o insert. experimenta da um get q vc vai ver...

//PROBLEMA PRINCIPAL: queria apertar só uma vez no botao e fzr automaticamente o post de tds as ações separadamente um por um... mas n tenho ideia de como fzr

// só pra ficar mais claro... só estou querendo fzr isso p gerar uma lista de ações ou não permitir que ações fora dessa lista possam ser adicionados no app/site pra eu n procurar coisa q n existe no site

let papel;

const attributePapelValue = (result) => {
    console.log(result[8])
    return papel=result[8]
}



 module.exports = {
    
    async create(req,res){
        
        await connection('papel')
        .then(arrayPapel)
        .then(attributePapelValue)
        await connection('papel').insert(
            { papel}
        )
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


/*
 create(req,res){
        
    arrayPapel()
    .then(attributePapelValue)
    .then(
        connection('papel').insert({
            papel
        })
    )

    return res.json({
        papel
    })
    
},


async delete(req,res){
        const { papel} = req.params;
        await connection('papel').where('papel',papel).delete();
        return res.status(200).send("Papel deletado");
    }
*/

