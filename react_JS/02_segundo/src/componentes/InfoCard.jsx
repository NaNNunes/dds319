import {useParams, useNavigate} from 'react-router-dom' // hooks

const InfoCard = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    
    console.log("id: ", id)

    const VoltarHome = () =>{
        navigate("/");
    }
    return (
        <div>
            <p>InfoCard do cartão: {id}</p>
            <button onClick={VoltarHome}>Voltar</button>    
        </div>
    )
}

export default InfoCard