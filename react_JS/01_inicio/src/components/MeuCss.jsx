import React from 'react'

import './MeuCss.css'

function MeuCss() {
  return (
    <div>
        <h1>MeuCss</h1>
        <p>para</p>
        <p className='yellow'>grafo</p>
        <p style={{color:"yellow", backgroundColor:"red"}}>nova linha style inline</p>
        {/* style dinamico = {objeto.metodoChave : "metodoValor"}    */}
    </div>
  )
}

export default MeuCss