import React from 'react'
import Forms from './Forms'
import NewForms from '../componentes/newForms/NewForms'

const Cadastro = () => {
  return (
    <>
      <h1>Cadastro</h1>
      {/* <Forms
        nome="User" // valorzin passado como parametro
        email="user@gmail.com"
        senha="eh1testeAhn"
      /> */}
      <NewForms/>
    </>
  )
}

export default Cadastro