const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');


async function investingArrayPapel() {
    const res = await axios.get('https://br.investing.com/equities')
    const ação = [];
    const $ = cheerio.load(res.data);

    let allnames = $(".bold.left.noWrap.elp.plusIconTd").text();
    
    const wrong = [];
    const listname = [];
    //console.log(allnames)
    let inicio = 0;
    let fim;
    for (let i = 0; i < allnames.length; i++) {
        let j=i+1;
        if((allnames[i]==="O")&&(allnames[j]==="N")||(allnames[i]==="P")&&(allnames[j]==="N")){    
            fim = j+1;
            let splitN = allnames.slice(inicio,fim);
            inicio = j+1;
            if((splitN[0].toLowerCase() === splitN[0])&&(splitN[1].toUpperCase() === splitN[1])){
                fim = splitN.length
                //console.log(splitN)
                splitN = splitN.slice(1,fim)
                //console.log(splitN)
            }
            //console.log(splitN)
            listname.push(splitN);
                        for (let i = 0; i < splitN.length; i++){
                            let j=i+1;
                            if(((splitN[i].toLowerCase() === splitN[i])&&(splitN[j] === " "))||((splitN[i] === " ")&&(splitN[j].toUpperCase() === splitN[j]))){

                            }else{
                                if((splitN[i].toLowerCase() === splitN[i])&&(splitN[j].toUpperCase() === splitN[j])){
                                    if(j>5){
                                        let split1 = splitN.slice(0,j);
                                        //console.log(split1);
                                        let last = splitN.length
                                        let split2 = splitN.slice(j,last);
                                        //console.log(split2)
                                        wrong.push(split1);
                                        wrong.push(split2);
                                    }
                                }
                            }          
                        }   
        }
    }
    let m=0;
    let n;
    let sizebefore = listname.length
    for (let k = 0; k < sizebefore; k++) {
        let table1 = listname[k];
        let table2 = wrong[m];
        
        n=m+1;
        let table3 = wrong[n];
        vazio = table1.replace(table2,"").replace(table3,"");
        if(vazio === ""){
            
            listname[k] = table3;
            listname.push(table2);
            m=m+2;
        }        
    }
    //console.log(listname)
    return listname;

}


module.exports = investingArrayPapel;
