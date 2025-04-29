// Importação do useState para criar as variáveis.
import { useState, useEffect } from "react";

// Variável para url da api, vindo do arquivo .env.
const url = import.meta.env.VITE_API_URL;

// Função para requisitar todos os funcionários.
export function getFuncionarios(){
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect( () => {
        async function fetchData() {
            try{
                // Faz a requisição pra api, com a url designada
                const response = await fetch(url);

                // Converte a resposta da api pra json
                const data = await response.json();
                setFuncionarios(data);
                console.log("Dados recebidos: ", data);
                
            }
            catch(error){
                console.log("Erro ao buscar os dados: ", error);
            }
        }

        fetchData();
    }, []);

    // Retorna a lista de funcionários, já com os dados da api
    return funcionarios;
}

export function addFuncionario(funcionario){
    async function fetchData() {
        try{
            const response = await fetch(url, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(funcionario)
            })

            const data = await response.json();
            console.log("Usuário adicionado: ", data);
        }
        catch(error){
            console.log("Erro ao cadastrar funcionário: ", error);
        }
    }
    fetchData();
}

export function deleteFuncionario(id){
    async function  fetchData() {
        try{
            const resp = await fetch(`${url}/${id}`,{
                method:"DELETE"
            })
            const data = await resp.json();
            console.log("Funcionário exclído com sucesso: ", data);
        }
        catch(error){
            console.log("Erro deleta funcionário: ", error);
        }
    }

    fetchData()
}

export function editFuncionario(funcionario){
    async function fetchData() {
        try {
            const resp = await fetch(`${url}/${funcionario.id}`,{
                method:"PUT",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(funcionario)
            })
            const data = await response.json();
            console.log("Usuário editado:", data);
        } catch (error) {
            console.log("Erro ao editar funcionário:", error)
        }
    }
    fetchData()
}