const connection = require('../database/connection');
const investingArrayPapel = require('../scrapping/InvestingArrayPapelScrapping');

let listname;

const attributeInvestingValue = (result) => {
    //console.log(result)
    return listname=result
}
//investingArrayPapel().then(attributeInvestingValue)




 module.exports = {

    async create(req,res){
        await connection('investingpapel').delete();

        await connection('investingpapel')
        .then(investingArrayPapel)
        .then(attributeInvestingValue)

        let investingpapel

        for (let n = 0; n < listname.length; n++) {
            investingpapel = listname[n]
            await connection('investingpapel').insert({ investingpapel })
        }
        
        return res.json({
            investingpapel
        })
    },

    
    async update(req,res){

        await connection('investingpapel')
        .then(investingArrayPapel)
        .then(attributeInvestingValue)

        let investingpapel
        let dbpapel
        for (let n = 0; n < listname.length; n++) {
            investingpapel = listname[n]
            dbpapel = await connection('investingpapel').select('*').where('investingpapel',investingpapel)
            if(dbpapel.length===0){
                console.log("nova ação!!!",investingpapel)
                await connection('investingpapel').insert({ investingpapel })
            }
            
        }
        
        return res.json({
            investingpapel
        })
    },
    

    async index(req,res){
        const lista_investingpapel = await connection('investingpapel').select('*');
        return res.json(lista_investingpapel)
    },

    
    async delete(req,res){
        const { investingpapel} = req.params;
//.where('investingpapel',papel)
        await connection('investingpapel').delete();
        return res.status(200).send("Papel deletado");
    },
    

    
    
 }
