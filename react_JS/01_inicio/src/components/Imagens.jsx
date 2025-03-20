import React from 'react'
import Pawn from "../assets/pawn.jpg"

function Imagens() {
  return (
    <div>
        <h1>Imagens</h1>
        <img src="./tyler.jpg" alt="" width={200} height={200}/>
        <h2>Imagens importada de assets</h2>
        <img src={Pawn} alt=""/>
    </div>
  )
}

export default Imagens
