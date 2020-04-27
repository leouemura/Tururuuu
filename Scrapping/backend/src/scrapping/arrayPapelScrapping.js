const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');


//const getPapel =  async function(n){
async function arrayPapel() {
    const res = await axios.get('https://www.fundamentus.com.br/detalhes.php?papel=')
    const ação = [];
    const $ = cheerio.load(res.data);
    //console.log($);
    let tdfudido = $('[href]').after(" ").text();
    let cortado = tdfudido.replace("Busca avan�ada por empresaP�gina inicialInvestimento conscienteEntre em contatoDetalhesBalan�o patrimonialDemonstrativos de resultadosFluxo de caixaIndicadores fundamentalistasBalan�os em ExcelProventosHist�rico de cota��esPapelNome ComercialRaz�o Social", "");
    let cortado2 = cortado.replace("P�gina inicialConhe�a o siteInvestimento ConscienteEntre em contatoGr�ficosDetalhesHist�rico de cota��esProventosBalan�os Hist�ricos.", "");
    let cortado3 = cortado2.replace(" ", "");
    //let splitted = cortado2.split('3');
    for (let i = 0; i < cortado3.length; i++) {
        var verifNum = isNaN(cortado3[i]);
        //console.log(cortado3[i]+'\t'+i+'\t'+verifNum);
        if (verifNum === false) {
            var k = i + 1;
            var verif2Num = isNaN(cortado3[k]);
            if ((verif2Num === false) && (verifNum === false)) {
                //console.log(cortado3[i]+'\t'+i+'\t'+verifNum+'\t'+cortado3[k]+'\t'+k+'\t'+verif2Num);
                //ação: de 5 a 6 caracteres
                let inicio = k - 5;
                let fim = k + 1;
                //console.log('ação inicia no '+inicio+' e termina no '+fim+' caractere');
                let logAção = cortado3.slice(inicio, fim);
                ação.push(logAção);
                //console.log(logAção);
            }
            else {
                let inicio = i - 4
                let fim = i + 1;
                let logAção = cortado3.slice(inicio, fim);
                ação.push(logAção);
                //console.log(logAção);
            }
        }
    }
    /*
    const papelJSON = JSON.stringify(ação);
    return papelJSON;
    */
//    console.log('alo',ação[n])
    return ação
}

//arrayPapel().then(ret => console.log(ret))

module.exports = arrayPapel;
