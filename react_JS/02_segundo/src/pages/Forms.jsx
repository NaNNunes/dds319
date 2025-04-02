import { useState } from 'react'

import style from "./forms.module.css"

const Forms = (props) => {
    const [nome, setNome] = useState(props ? props.nome : ""); // se tiver valor salvo : ponha valor senao : nada
    const [email, setEmail] = useState(props ? props.email : "");
    const [senha, setSenha] = useState(props ? props.senha : "");

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
                <input 
                    type="text" 
                    name="" 
                    id="nome" 
                    placeholder='Digite seu nome' 
                    onChange={handleName}
                    value={nome}
                />
            </label>

            <label>
                <span>Email: </span>
                <input 
                    type="email" 
                    id="email" 
                    placeholder='Digite seu email'
                    onChange={
                        (e) =>{ // problema performatico, pois a cada mudança ocorre execução. | solução : react hook form (npm i react-hook-form)
                            console.log(e.target.value);
                            setEmail(e.target.value);
                        }
                    }
                    value={email}
                />
            </label>
            
            <label>
                <span>Senha: </span>
                <input 
                    type="password" 
                    id="senha" 
                    placeholder='Digite a senha' 
                    onChange={
                        (e) =>{
                            console.log(e.target.value);
                            setSenha(e.target.value);
                        }
                    }
                    value={senha}
                />
            </label>

            <input type="submit" value="Enviar" className={style.btn}/>
        </form>
    </div>
  )
}

export default Forms