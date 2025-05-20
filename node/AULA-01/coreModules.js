const fs = require("fs");

// console.log(fs)

//-----
// read
// fs.readFile('ehUmTesteAn.txt', "utf8", (erro, data) => {
//     if(erro){
//         console.log(erro);   
//     }
//     else{
//         console.log(data);
//     }
// });

//----

//create
// const msg = "Estampa de cruz na minha calça q eu sou fashion";
// fs.writeFile('ehUmTeste2.txt', msg, "utf8", (erro) => (erro != null) ? console.log(erro) : console.log("Criado com sucesso"));

//------
//update
// const msg2 = "\nOutra msg";
// fs.appendFile("ehUmTeste2.txt", msg2, "utf8", ((erro)=>{
//     if(erro){
//         console.log("Deu ruim");
//     }
//     else{
//         console.log("Texto adicionado com sucesso");
//     }
// }))

//----
//delete
// fs.unlink("ehUmTeste2.txt", (erro)=>{
//     if(erro){
//         console.log("Algo deu errado");
//     }
//     else{
//         console.log("File deletado com sucesso");
//     }
// });