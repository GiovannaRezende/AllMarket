import { Container } from './styled'

export default function BoxProduto(props) {
    return (
        <Container>
            <div class="img1"> <img src={props.info.imagem} /> </div>
            <div class="nome"> {props.info.nome} </div>
            <div class="marca"> {props.info.marca} </div>
            <div class="peso"> {props.info.peso} </div>
            <div class="preco"> {props.info.preco} </div>
            <div class="botao"> <img src="./assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
        </Container>
    )
}