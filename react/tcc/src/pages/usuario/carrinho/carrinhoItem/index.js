import { useState } from 'react'
import { toast } from 'react-toastify';

import Contador from '../contador/'
import { Container } from './styled'

export default function BoxItem(props) {
    const [produto, setProduto] = useState(props.info);

    function alterarQtd(qtd) {
        setProduto({...produto, qtd})
        props.onUpdate(produto.id, qtd)
    }

    function removerProduto() {
        props.onRemove(produto.id_produto)
        toast.dark('🗿 Produto Removido do Carrinho')

    }

    return (
        <Container> 
            <div class="imagem-produto"> <img src={produto.img_produto} /> </div> 
            <div class="informacoes-produto">
                <div class="nome-produto"> {produto.nm_produto} </div>
                <div class="medida-produto"> {produto.ds_peso} </div>
                <div class="preco-produto"> R${produto.vl_preco} </div> 
                <div class="quantidade-produto">  
                    <div class="remover-produto" onClick={removerProduto}> Remover </div>
                    <Contador onChange={alterarQtd} quantidade={produto.qtd} />
                </div> 
            </div>
        </Container>
    )
}