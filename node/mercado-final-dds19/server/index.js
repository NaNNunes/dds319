import express from "express";
import cors from "cors";
import { buscarUsers } from "./controllers/usuarioController.js";
import { atualizarProdutos, buscarCateg, buscarProdutoById, buscarProdutos, criarProdutos, excluirProduto } from "./controllers/produtoController.js";

const app = express();
const port = 5000;

// Configurar CORS antes das rotas
const corsOptions = {
  origin: "http://localhost:5173", // seu frontend (por exemplo, Vite)
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use (express.urlencoded({extended:true}))

// Suporte para JSON no corpo das requisições, se precisar
app.use(express.json());

// Rotas para users
app.get("/usuarios", buscarUsers);

// ROTAS PARA PRODUTO
app.get("/categorias", buscarCateg);
app.get("/produtos", buscarProdutos);

app.delete("/produtos/:id", excluirProduto);
app.post("/produtos", criarProdutos);
app.get("/produtos/:id", buscarProdutoById);
app.put("/produtos/:id", atualizarProdutos);

app.get("/", (req, res) => {
  res.status(200).send("Tá funcionando");
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
