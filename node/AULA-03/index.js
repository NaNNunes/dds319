const express = require("express");
const app = express();
const port = 5000;

//path
const path = require("path");
const basePath = path.join(__dirname, 'pages');

const mysql = require("mysql");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
// routers

app.post("/bebes/atualizar", (req, res) => {
    const id = req.body.idValor;
    const nome = req.body.nome;
    const sexo = req.body.sexo;
    const mae = req.body.nomeMae;

    const sql = `UPDATE bebe
                    SET nome_bb = '${nome}', sexo = '${sexo}', nome_mae = '${mae}'
                    WHERE id_bebe = ${id}`;

    connection.query(sql, (erro, dados) => {
        if (erro) {
            console.log(erro);
        }
        else {
            res.status(200).sendFile(`${basePath}/home.html`);
        }
    })
});

app.get("/bebes/:id", (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM bebe WHERE id_bebe = ${id}`;

    connection.query(sql, (erro, dados) => {
        if (erro) {
            console.log(erro);
        }
        else {
            res.json(dados[0]);
        }
    })
});

app.get("/bebe/editar/:id", (req, res) => {
    res.status(200).sendFile(`${basePath}/editarbebe.html`);
});

app.get("/bebes/excluir/:id", (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM bebe WHERE id_bebe = ${id}`;
    connection.query(sql, (erro) => {
        if (erro) {
            console.log(erro)
        }
        else {
            res.status(200).sendFile(`${basePath}/home.html`);
        }
    });
});

// add bebe
app.post(("/bebe/insert"), (req, res) => {
    const nome = req.body.nome;
    const sexo = req.body.sexo;
    const mae = req.body.nomeMae;

    const sql = `INSERT INTO bebe (nome_bb, sexo, nome_mae)
                        VALUES ('${nome}','${sexo}','${mae}')`;

    connection.query(sql, (erro, data) => {
        if (erro) {
            console.log(erro);
        }
        else {
            res.status(200).redirect("/home");
        }
    })
});

app.get("/bebe/cadastrar", (req, res) => {
    res.status(200).sendFile(`${basePath}/cadastrarbebe.html`);
});

//buscar bebes no banco
app.get("/bebes", (req, res) => {
    // query
    const sql = `SELECT * FROM bebe`;

    connection.query(sql, (erro, data) => {
        if (erro) {
            console.log(erro);
        }
        else {
            res.json(data).sendFile(`${basePath}/home.html`);
        }
    });

});

// home
app.get("/home", (require, response) => {
    response.status(200).sendFile(`${basePath}/home.html`);
});
app.get("/", (require, response) => {
    response.status(200).sendFile(`${basePath}/home.html`);
});

// erro de rota não encontrada
app.use((require, response, next) => {
    response.status(404).sendFile(`${basePath}/404.html`)
});

//conexoes de mafia com o banco
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'nodebercario'
});

connection.connect((erro) => {
    if (erro) {
        console.log(erro);
    }
    else {
        // caso conexao rodar servidor
        console.log("Conectado!");
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    }
});