import Cookie from 'js-cookie'
import { useState } from 'react';

import { Container } from './styled'

import { toast } from 'react-toastify';



export default function BoxProduto(props) {
    const [produto, setProduto] = useState(props.info);
    console.log(setProduto);

    console.log(props)

    function getImage() {
        return 'http://localhost:3030/produto?imagem=${props.info.imagem}'
    }

    function comprar() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined
                    ? JSON.parse(carrinho)
                    : [];

        if (carrinho.some(item => item.id_produto === produto.id_produto) === false) {
            carrinho.push({...produto, qtd: 1});
            toast.dark('🗿 Produto Adicionado ao Carrinho');
        } else {
            toast.dark('🗿 Produto Já Está no Carrinho')
        }
        
        Cookie.set('carrinho', JSON.stringify(carrinho));
    }

    return (
        <Container>
            <div className="imagem"> <img src={getImage()} alt=""/> </div>
            <div class="nome"> {props.info.nm_produto} </div>
            <div class="marca"> {props.info.nm_marca} </div>
            <div class="peso"> {props.info.ds_peso} </div>
            <div class="preco"> {props.info.vl_preco} </div>
            <div class="botao" onClick={comprar}> <img src="./assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
        </Container>
    )
}