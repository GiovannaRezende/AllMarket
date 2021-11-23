import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

import { BoxPedidoGerenciamentoStyled } from './styled'
import { BotaoLaranja } from '../../../../components/outros/botoes/styled';

import Api from '../../../../service/api';
const api = new Api();

export default function BoxPedidoGerenciamento(props) {
    const [compras, setCompras] = useState(props.info)
    const [endereco, setEndereco] = useState([])

    async function alterarStatus(idCompra) {

        let compra = await api.listarCompraEntrega(idCompra);
        console.log(compra)
        let status = compra.ds_status;

        let r = await api.alterarStatus(idCompra, status);
        console.log(r);
        return(r);
    }

    async function listarEndereco(idCompra) {
        idCompra = compras.id_compra;
        console.log(idCompra)
        let r = await api.enderecoPedido(idCompra);
        
        setEndereco(r);
    }

    useEffect(() => {
        listarEndereco();
    }, [])


    return (
        <BoxPedidoGerenciamentoStyled> 
            <div class="pedido"> Pedido: {compras.id_compra}</div>
            <div class="foto-texto-botao">
                <div class="foto-textos">
                    <div class="foto"><img src="/assets/images/em-preparo.svg" alt=""/></div>
                    <div class="textos">
                        <div class="texto-destino"><span>Destino:</span> Rua: {endereco.nm_rua}, Número: {endereco.ds_numero} - Cidade: {endereco.nm_cidade} </div>
                        <div class="texto-status"><span>Status:</span> {compras.ds_status}</div>
                    </div>
                </div>
                <div className="botoes-gerenciamento"> 
                    <div class="botao"> <Link to={{ pathname: '/pedido-entrega', state: compras.id_compra}}> <BotaoLaranja> Ver Detalhes </BotaoLaranja> </Link> </div>
                    <div class="botao"> <BotaoLaranja onClick={() => alterarStatus(compras.id_compra)}>Atualizar status</BotaoLaranja> </div>
                </div>
            </div>
        </BoxPedidoGerenciamentoStyled>
                
    )
}