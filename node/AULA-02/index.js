const express = require('express');
// const { request } = require('http');
const app = express();
const port = 5001;

const path = require("path");
const basePath = path.join(__dirname, 'pages');

console.log(basePath);

app.get("/users/cadastrar", (request, response) =>{
    response.sendFile(`${basePath}/cadastro.html`)
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/users/:id", (request, response)=>{
    const id = request.params.id;
    console.log(`The user foi encontrado ${id}`);
    response.sendFile(`${basePath}/users.html`);
})

app.post("/users/save", (request, response) =>{
    console.log(request.body);

    const login = request.body.user;
    const senha = request.body.senha;

    console.log(`Login do user: ${login}, Senha: ${senha}`);
    response.send(login+senha);
    response.end();
})


app.get("/", (request, response) => {
    // response.send("<h1>Hello World!</h1>");
    response.status(200);
    response.sendFile(`${basePath}/index.html`)

})

app.get("/home", (request, response) => {
    // response.send("<h1>Hello World!</h1>");
    response.status(200);
    response.sendFile(`${basePath}/index.html`)

})

app.use((request, response, next)=>{
    response.status(404).sendFile(`${basePath}/404.html`);
})

const checkAuth = function(req, res, next){
    req.authStatus = true;
    
    if(req.authStatus){
        console.log("User autenticado");
        next();
    } 
    else {
        console.log("User não autenticado");
        next();
    }

}

app.use(checkAuth);

app.listen(port, ()=>{
    console.log(`Server Hello World rodando na porta: ${port}`);
})