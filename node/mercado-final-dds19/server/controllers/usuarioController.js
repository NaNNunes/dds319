import connection from "../connection.js";

export const buscarUsers = (req, res) => {
    const sql = `SELECT * FROM usuarios`;

    connection.query(sql, (erro, result) =>{
        if(erro){
            console.log(erro)
            res.status(500).json(erro).end();
        }
        else{
            console.log(result);
            res.status(200).json(result).end();
        }
    })
}