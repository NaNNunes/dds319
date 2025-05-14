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

export function useBuscarProdutoId(id){
    const buscarProdutoPorId = async (idProduto) => {
        const req = await fetch(`${url}/produtos/${idProduto}`);
        const res = req.json();
        console.log("Produto encontradp:", res)
        return res
    }
    return {buscarProdutoPorId}
}

export function useListaCatorgorias(){
    const [categorias, setCategorias] = useState();

    useEffect(()=>{
        async function fetchData() {
            try{
                const req = await fetch(`${url}/categorias`)
                const categ = await req.json();
                console.log(categ);
                setCategorias;
            }
            catch(erro){
                console.log(erro.message);
            }
        }
        fetchData()
    },[]);
    return categorias;
}

export function useInserirProduto(){
    const inserirProduto = async (data) => {
        const req = await fetch(`${url}/prdutos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const res = await req.json()
        console.log("Produto inserido:", res);
        return res;
    }
    return {useInserirProduto}
}

// export function useBuscarProdutoId(){
//     return false
// }

export function useAtualizaProduto(){
        const atualizaProduto = async (data, idProduto) => {
        const req = await fetch(`${url}/prdutos/${idProduto}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const res = await req.json()
        console.log("Produto Atualizado:", res);
        return res;
    }
    return {useInserirProduto}
}
