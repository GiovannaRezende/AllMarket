import { Container } from './styled'

export default function BoxProduto(props) {
    return (
        <Container>
            <div class="img1"> <img src="./assets/images/Imagem-Leite-em-Pó-2.png" alt="" /> </div>
            <div class="desc">Leite em Pó</div>
            <div class="desc2">Ninho</div>
            <div class="peso">400G</div>
            <div class="preco">R$17,35</div>
            <div class="botao"> <img src="./assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
        </Container>
    )
}