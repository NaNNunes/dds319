// console.log("Hello World");

// console.log(process.argv);

//----------

// let args = process.argv.slice(2);
 
// console.log(args);
 
// let dispositivos = args[0].split("=");
// console.log(dispositivos);

// ------

//importa modulo
const moduloImportado = require("./modulo_interno.js");
//chama metodo do objeto importado
moduloImportado.soma(10,3);
moduloImportado.subtrair(178,3);
moduloImportado.multiplicador(10,3);
moduloImportado.divisao(30,9);
moduloImportado.potencia(3,4);
moduloImportado.raiz(81,2);