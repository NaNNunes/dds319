// file used to connect to db

import mysql2 from "mysql2";

const connection = mysql2.createConnection({
    host: "localhost",
    port:"3306",
    user:"root",
    password:"",
    database:"mercado"
});

connection.connect((erro) =>{
    if(erro){
        console.log(erro);
    }
    else{
        console.log("Conectado com secesso ao banco!")
    }
})

export default connection;