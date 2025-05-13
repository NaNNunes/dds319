const url = import.meta.env.VITE_API_URL;

import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../context/UserContext";

export function useVerificaLogin(){
    const [usuarios, setUsers] = useState([]);

    const {login} = useContext(AuthContext);

    useEffect(() => {
        async function fetchData(){
            try {
                const req = await fetch(`${url}/usuarios`);
                const users = await req.json();
                setUsers(users);
            } catch (erro) {
                console.log(erro.message);
            }
        }
        fetchData();
    },[])

    const verificaLogin = (data) => {
        const user2Find = usuarios.find((user) => {
            return user.email === data.email;
        })

        if(user2Find != undefined && user2Find.senha === data.senha){
            login(user2Find);
            console.log("usuario logado", user2Find.nome);
            return "Login efetuado com sucesso";
        } else{
            return "usuario ou senha inválido";
        }
    };

    
    return { verificaLogin };
}

export function useListaProdutos(){
    const [produtos, setProdutos] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            try{
                const req = await fetch(`${url}/produtos`);
                const produtos = await req.json();
                setProdutos(produtos);
            }
            catch(erro){
                console.log(erro.message);
            }
        }
        fetchData();
    },[])

    return produtos;
}

export function useDeleteProduto(){
    const deletarProduto = async (idProduto) => {
        const req = await fetch(`${url}/produtos/${idProduto}`, {
            method: "DELETE"
        });
        const res = await req.json();
        console.log("Produto deletado: ", res);
        return res;
    }

    return {deletarProduto}
}