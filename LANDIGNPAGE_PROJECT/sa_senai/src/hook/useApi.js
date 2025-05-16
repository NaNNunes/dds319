import { useEffect, useState } from "react";

const url = import.meta.env.VITE_API_URL;

export function useListaCursos(){
    const [cursos, setCursos] = useState([]);

    useEffect(() =>{
        async function fetchData() {
            try{
                const request = await fetch(`${url}/cursos`);
                const response = await request.json();
                setCursos(response);
            }
            catch(error){
                console.log(error.message)
            }
        }
        fetchData();
    }, [])

    return cursos;
}

// hook para pegar infos do curso pelo id