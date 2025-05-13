import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import {useDeleteProduto} from "../hooks/useApi.js";

const CardProduto = (props) => {
  const {deletarProduto} = useDeleteProduto();

  const handleDelete = async () =>{
    const deletado = await deletarProduto(props.id);
    console.log(`Produto ${deletado.nome} deletado com sucesso`);
    alert(`Produto ${deletado.nome} deletado com sucesso`);
    window.location.reload();
  }

  return (
    <div>
      <Card style={{width:"15rem", height:"30rem"}}>
        <Card.Img  
          variant="top"
          src={
            props.imgUrl != "null" 
            ? props.imgUrl
            : "https://anest-iwata.com.br/wp-content/uploads/2016/10/Sem-imagem.png" 
          }
          height='200px'
        />
          <Card.Body>
            <Card.Title>{props.nome}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Preço:{props.preco}</Card.Subtitle>
            <Card.Text><b>Descrição:</b><br></br>{props.descricao}</Card.Text>
            <Card.Text><b>Categoria:</b><br></br>{props.categ}</Card.Text>
            <Card.Link href={`/editar-produto/${props.id}`}>
              <Button variant='warning'>Editar</Button>
            </Card.Link>
            <Card.Link>
              <Button variant='danger' type='button' 
                onClick={handleDelete}
              >
                Deletar
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
    </div>
  )
}

export default CardProduto