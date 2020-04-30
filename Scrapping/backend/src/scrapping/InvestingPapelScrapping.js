const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');


async function investingPapel() {
    const res = await axios.get('https://br.investing.com/equities/ambev-pn')
    const ação = [];
    const $ = cheerio.load(res.data);

    let id_link = "ambev-pn";
    let id = "18599";

    let name = $(".float_lang_base_1.relativeAttr").text();
    let price = $("#last_last").text();
    let dailyVariation = $(`.arial_20.pid-${id}-pcp.parentheses.greenFont`).text();
    let dailyValue = $(`.arial_20.pid-${id}-pc.greenFont`).text();
    let time = $(`.bold.pid-${id}-time`).text();
    console.log("name: ", name, "\nprice: ", price, "\ndailyVariation: ", dailyVariation, "\ndailyValue: ", dailyValue, "\ntime: ", time)

    let nextResults = $(`[href='/equities/${id_link}-earnings']`).text().replace("Balanços","");
    console.log("nextResults: ",nextResults)

    /*
    let minmax = $(".float_lang_base_2.bold").text()
    console.log("\nminmax: ",minmax)
    */
    return name,price,dailyVariation,dailyValue,time,nextResults
}

module.exports = investingPapel;