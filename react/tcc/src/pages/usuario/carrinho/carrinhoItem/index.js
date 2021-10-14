import { useState } from 'react'
import Contador from '../contador/'
import { Container } from './styled'

export default function BoxItem(props) {
    const [produto, setProduto] = useState(props.informacoes);

    function alterarQtd(qtd) {
        setProduto({...produto, qtd})
        props.onUpdate(produto.id, qtd)
    }

    function removerProduto() {
        props.onRemove(produto.id)
    }

    return (
        <Container> 
            <div class="imagem-produto"> <img src="/assets/images/coca-cola.svg" alt=""/> </div>
            <div class="informacoes-produto">
                <div class="nome-produto"> Refrigerante - Coca Cola </div>
                <div class="medida-produto"> 200ml </div>
                <div class="preco-produto"> R$ 6,85 </div> 
                <div class="quantidade-produto">  
                    <div class="remover-produto" onClick={removerProduto}> Remover </div>
                    <Contador onChange={alterarQtd} /*quantidade={produto.qtd}*/ />
                </div> 
            </div>
        </Container>
    )
}