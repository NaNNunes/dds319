// utilizando modulo npm
const minimist = require("minimist");

// utilizando modulo do node core modules
const fs = require('fs');

// utilizando modulo interno
const moduloSoma = require("../modulo_interno");

// var para guardar agumentos passados
const args = minimist(process.argv.slice(2));

const funcSoma = moduloSoma.soma;

//vars vindas do objeto gerado pelo minimist
const a = parseInt(args["a"]);
const b = parseInt(args["b"])

const resultado = funcSoma(a, b);

fs.appendFile("resultado.txt", resultado, "utf8", ((erro, data) =>{
    if(erro){
        console.log("Deu ruim")
    }
    else{
        console.log("Para bens");
    }
}));