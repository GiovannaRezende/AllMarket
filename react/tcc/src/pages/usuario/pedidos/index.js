import { PedidosStyled } from './styled'
import CabecalhoUsu from '../../../components/cabecalhos/usu/cabecalho-usu';

import { useState } from 'react';

import Api from '../../../service/api';
const api = new Api();

export default function Pedido() {

    const [pedidos, setPedidos] = useState([]);
    

    return (
        <PedidosStyled>
            <CabecalhoUsu/>
            <div class="conteudo">
                <div class="numero-pedido"> 
                    <div class="pedido"> Pedido 0845 </div> 
                    <div class="barra"></div>
                    <div class="status-pedido"> Pedido Entregue </div> 
                </div>
                <div class="texto-lista"> Lista de Produtos </div> 
                <div class="box-lista">
                    {pedidos.map((item, i) =>
                        <div class="box-produto">
                        <div class="imagem-produto"> <img src="/assets/images/coca-cola.png" alt=""/> </div> 
                        <div class="informacoes-produto"> 
                            <div class="nome-produto">{item.id_produto}</div>
                            <div class="preco"> <b>Preço: </b> R$ 8,20 </div>
                            <div class="qtd-produto"> <b>Quantidade selecionada: </b> 2 </div>
                        </div>
                    </div>
                    )}

                    <div class="box-produto">
                        <div class="imagem-produto"> <img src="/assets/images/coca-cola.svg" alt=""/> </div> 
                        <div class="informacoes-produto"> 
                            <div class="nome-produto"> Desodorante</div>
                            <div class="preco"> <b>Preço: </b> R$ 8,20 </div>
                            <div class="qtd-produto"> <b>Quantidade selecionada: </b> 2 </div>
                        </div>
                    </div> 
                
                    <div class="box-produto">
                        <div class="imagem-produto"> <img src="/assets/images/coca-cola.svg" alt=""/> </div> 
                        <div class="informacoes-produto"> 
                            <div class="nome-produto"> Desodorante</div>
                            <div class="preco"> <b>Preço: </b> R$ 8,20 </div>
                            <div class="qtd-produto"> <b>Quantidade selecionada: </b> 2 </div>
                        </div>
                    </div>
                </div>
                <div class="botao-voltar"> <button>Voltar</button> </div>
            </div> 
        </PedidosStyled>
    )
}