import { useState } from 'react'
import './App.css'

import ShowUserName from './componentes/showUserName/ShowUserName';
import ShowUserInfos from './componentes/showUserInfos/ShowUserInfos';
import Cantores from './componentes/cantores/Cantores';

function AppCopy() {
  const nome = "Lara"
  const [name, setName] = useState("Luciana");

  const [cantores] = useState([
    { id: 0, nome: "Matuê", estiloMusical: "Trap", premiado: false },
    { id: 1, nome: "Michael Jackson", estiloMusical: "POP", premiado: true },
    { id: 2, nome: "Nando Reis", estiloMusical: "Rock", premiado: true },
    { id: 3, nome: "Kendrick Lamar", estiloMusical: "Rap", premiado: true }
  ]);

  const n = 10;
  const titulo = true;

  return (
    <>
      {/* 
      {/* Rendering components w/ props }
      <ShowUserName name={nome} age={20}/>

      {/* props w/ distruct}
      <ShowUserInfos name={nome} uf={"ES"} age={20} eGente={true}/>
      <ShowUserInfos name={"Claudio"} uf={"ES"} age={62} eGente={true}/>
      <ShowUserInfos name={"Erivelton"} uf={"ES"} age={0.2} eGente={false}/>*/}

      {/* Renderização de lista e passagem de props para componentes*/}
      {/* {cantores.map((cantor) =>(
        <Cantores 
          key={cantor.id}
          nome={cantor.nome}
          estiloMusical={cantor.estiloMusical}
          premiado={cantor.premiado}
        />
      ))} */}

        {/* <h2 style={ 
          (n > 5) 
            ? {color:"red", backgroundColor:"white"} 
            : {color:"blue", backgroundColor:"yellow"} }>
          ESTE CSS É DINAMICO</h2>
        <h2 style={
          (n < 5) 
            ? {color:"red", backgroundColor:"white"} 
            : {color:"blue", backgroundColor:"yellow"}
         }>
          ESTE CSS TBM É DINAMICO</h2>


         <h1 
          className = {
            titulo 
              ? "titulo-bom"
              : "textinho"
          }>
            Titulo
          </h1> */}
    </>
  )
}

export default AppCopy
