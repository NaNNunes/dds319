import React from 'react'

const Cantores = (props) => {
  return (
    <div>
        <h2>nome: {props.nome}</h2>
        <h2>Estilo Musical: {props.estiloMusical}</h2>
        {props.premiado && <h3>Foi premiado</h3> || <h3>Não foi premiado</h3>}
        <hr />
    </div>
  )
}

export default Cantores