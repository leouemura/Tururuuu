const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');


async function investingIdPapel() {
    const res = await axios.get('https://br.investing.com/equities')
    const ação = [];
    const $ = cheerio.load(res.data);
    
    let name = 'YDUQS'  //Automatizar isso dps e adicionar o dicionario

    let id_link = $(`a[title*='${name}']`).attr('href').replace("/equities/","")
    let id = $(`span[data-name*='${name}']`).attr('data-id')

    console.log("id_link: ",id_link,"\nid: ",id);
    return id_link,id;
}


module.exports = investingIdPapel;


