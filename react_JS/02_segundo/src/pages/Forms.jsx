import React, { useState } from 'react'

import style from "./forms.module.css"

const Forms = () => {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(`Nome: ${nome}`);
        console.log(`Email: ${email}`);
        console.log(`Senha: ${senha}`);
    }
  
    const handleName = (e) =>{
        console.log(e.target.value);
        setNome(e.target.value);
    }

    return (
    <div>
        <h4>Forms</h4>
        <form className={style.formula} onSubmit={handleSubmit}>
            <label htmlFor="nome">
                <span>Nome: </span>
                <input type="text" name="" id="nome" placeholder='Digite seu nome' onChange={handleName}/>
            </label>

            <label>
                <span>Email: </span>
                <input type="email" id="email" placeholder='Digite seu email' onChange={
                    (e) =>{
                    console.log(e.target.value);
                    setEmail(e.target.value);
                    }
                }/>
            </label>
            
            <label>
                <span>Senha: </span>
                <input type="password" id="senha" placeholder='Digite a senha' onChange={
                    (e) =>{
                    console.log(e.target.value);
                    setSenha(e.target.value);
                    }
                }/>
            </label>

            <input type="submit" value="Enviar" className={style.btn}/>
        </form>
    </div>
  )
}

export default Forms