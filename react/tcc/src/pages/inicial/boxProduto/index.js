import Cookie from 'js-cookie'
import { useState } from 'react';
import { Container } from './styled'

export default function BoxProduto(props) {
    const [produto, setProduto] = useState(props);

    function comprar() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined
                    ? JSON.parse(carrinho)
                    : [];

        if (carrinho.some(item => item.id === produto.id) === false)
            carrinho.push({...produto, qtd: 1});

        Cookie.set('carrinho', JSON.stringify(carrinho));
    }

    return (
        <Container>
            <div class="img1"> <img src={props.info.imagem} alt=""/> </div>
            <div class="nome"> {props.info.nome} </div>
            <div class="marca"> {props.info.marca} </div>
            <div class="peso"> {props.info.peso} </div>
            <div class="preco"> {props.info.preco} </div>
            <div class="botao" onClick={comprar}> <img src="./assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
        </Container>
    )
}