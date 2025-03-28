import React from 'react'

const TemplateExpressions = () => {
    let num = "5";

    let aluno = {
        nome : "Lara",
        idade : 20,
        curso : "Serviço Social"
    };

    return (
        <div>
            <h1>2 + 2 = {num}</h1>   
            <p>Nome: {aluno.nome}</p>
            <p>Idade: {aluno.idade}</p>
            <p>Curso: {aluno.curso}</p>
        </div>
    )
}

export default TemplateExpressions