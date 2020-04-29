const connection = require('../database/connection');
const crypto = require('crypto');
const arrayPapel = require('../scrapping/FundArrayPapelScrapping');

// CREATE apaga td, busca do site fundamentus e depois da insert de todos os elementos separados do array como papel no database
// UPDATE seleciona todos os obj papel e ve qual é vazio (inexistente no database)
// INDEX seleciona todos os obj em json do database e aloca na variavel lista_papel
// DELETE apaga todos ou determinado papel http://localhost:3000/papel/AÇÃOINDESEJADA

let papelarray;

const attributePapelValue = (result) => {
//    console.log(result)
    return papelarray=result
}



 module.exports = {

    async create(req,res){
        await connection('papel').delete();

        await connection('papel')
        .then(arrayPapel)
        .then(attributePapelValue)

        let papel

        for (let n = 0; n < papelarray.length; n++) {
            papel = papelarray[n]
            await connection('papel').insert({ papel })
        }
        
        return res.json({
            papel
        })
    },


    async update(req,res){

        await connection('papel')
        .then(arrayPapel)
        .then(attributePapelValue)

        let papel
        let dbpapel
        for (let n = 0; n < papelarray.length; n++) {
            papel = papelarray[n]
            dbpapel = await connection('papel').select('*').where('papel',papel)
            if(dbpapel.length===0){
                console.log("nova ação!!!",papel)
                await connection('papel').insert({ papel })
            }
            
        }
        
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
//.where('papel',papel)
        await connection('papel').delete();
        return res.status(200).send("Papel deletado");
    },


    
    
 }


