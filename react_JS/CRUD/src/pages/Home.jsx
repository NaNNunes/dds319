import CardProduto from "../componentes/CardProduto"
import { useListaProdutos } from "../hooks/useApi.js"

import { useContext } from "react";
import { AuthContext } from "../context/UserContext.jsx";
import { Navigate } from "react-router-dom";

const Home = () => {
  
  const {usuarioNome} = useContext(AuthContext)
  if(usuarioNome === "Visitante") return <Navigate to="/login"/>

  const produtos = useListaProdutos();
    
  return (
    <div>
      <h1>Lista</h1>
      <div className="d-flex col-12 gap-2 mt-3 justify-content-between flex-wrap">
        {produtos.map((prod)=>(
          <CardProduto
            key={prod.id}
            id={prod.id}
            nome={prod.nome}
            descricao={prod.descricao}
            preco={prod.preco}
            categ={prod.categoria}
            imgUrl={prod.imageUrl}
          />
        ))}
      </div>

    </div>
  )
}

export default Home
