// utilização de modulos 
module.exports = {

    soma(a, b){
        const resultado = a+b;
        console.log("Soma: ", (a+b));
        return resultado.toString();
    },
    subtrair(a,b){
        console.log("Subtração: ", (a-b));
    },
    multiplicador(a,b){
        console.log("multiplicação: ", (a*b));
    },
    divisao(a,b){
        console.log("Divisão: ", (a/b));
    },
    potencia(a,b){
        console.log("Potenciação: ", (a**b));
    },
    raiz(a,b){
        console.log("Raiz Quadrada: ", (Math.pow(a, 1/b)));
    },

}