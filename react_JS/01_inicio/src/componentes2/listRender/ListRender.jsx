import { useState } from "react";

function ListRender() {

    const alunos = ["Frank", "Kevem", "Nata", "Rena"];
    const [lista] = useState(alunos);

    const [users] = useState([
        {
            id: 1,
            nome: "jotinha",
            number: 33,
        },
        {
            id: 9,
            nome: "Vinicius",
            number: 13,
        },
        {
            id: 14,
            nome: "Mark",
            number: 1
        }
    ]);

    return (
        <div>
            <ul>
                {lista.map((aluno, index) => (
                    <li key={index}>{aluno}</li>
                ))}
            </ul>


            {users.map((user) => (
                <h2 key={user.id}> nome: {user.nome}, número: {user.number}</h2>
            ))}
        </div>
    )
}

export default ListRender