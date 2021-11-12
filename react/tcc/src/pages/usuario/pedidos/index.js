import { PedidosStyled } from './styled'
import CabecalhoUsu from '../../../components/cabecalhos/usu/cabecalho-usu';

import { useState, useEffect } from 'react';

import Api from '../../../service/api';
const api = new Api();

export default function Pedido() {

    const [pedidos, setPedidos] = useState([]);

    async function listarPedidos() {
        let r = await api.listarPedidos();
        setPedidos(r);
    }

    useEffect(() => {
        listarPedidos();
    }, [])

    return (
        <PedidosStyled>
            <CabecalhoUsu/>
            <div class="conteudo">
                <div className="numero-pedido"> 
                    <div className="pedido"> Pedido 0845 </div> 
                    <div className="barra"></div>
                    <div className="status-pedido"> Pedido Entregue </div> 
                </div>
                <div className="texto-lista"> Lista de Produtos </div> 
                <div className="box-lista">
                    {pedidos.map((item, i) =>
                        <div className="box-produto">
                        <div className="imagem-produto"> <img src="/assets/images/coca-cola.svg" alt=""/> </div> 
                        <div className="informacoes-produto"> 
                            <div className="nome-produto"></div>
                            <div className="preco"> <b>Preço: </b>R${item.vl_total}</div>
                            <div className="qtd-produto"> <b>Quantidade selecionada: </b>{item.qtd_quantidade}</div>
                        </div>
                    </div>
                    )}
                </div>
                <div className="botao-voltar"><button>Voltar</button></div>
            </div> 
        </PedidosStyled>
    )
}