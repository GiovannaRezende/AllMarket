import { PedidosStyled } from './styled'
import CabecalhoUsu from '../../../components/cabecalhos/usu/cabecalho-usu';

import { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar';

import Api from '../../../service/api';
const api = new Api();

export default function Pedido(props) {

    const [pedido, setPedido] = useState([]);
    const [idCompra] = useState(props.location.state)
    const loading = useRef(null);

    console.log(pedido)

    useEffect(() => {
        listarPedido();
    }, [])

    async function listarPedido() {
        loading.current.continuousStart();
        let r = await api.produtosPedido(idCompra);
        setPedido(r);
        loading.current.complete();
    }


    return (
        <PedidosStyled>
            <LoadingBar color="#FB8500" ref={loading} />
            <CabecalhoUsu/>
            <div class="conteudo">
                <div className="numero-pedido"> 
                    <div className="pedido"> Pedido 0845 </div> 
                    <div className="barra"></div>
                    <div className="status-pedido"> Pedido Entregue </div> 
                </div>
                <div className="texto-lista"> Lista de Produtos </div> 
                <div className="box-lista">
                    {pedido.map((item, i) =>
                        <div className="box-produto">
                        <div className="imagem-produto"> <img src={item.img_produto} alt=""/> </div> 
                        <div className="informacoes-produto"> 
                            <div className="nome-produto"> {item.nm_produto} </div>
                            <div className="preco"> <b>Preço: </b>R${item.vl_preco}</div>
                            <div className="qtd-produto"> <b>Quantidade selecionada: </b>{item.qtd_quantidade}</div>
                        </div>
                    </div>
                    )}
                </div>
                <div className="botao-voltar"><Link to="/perfil-usuario"><button className="botao-voltar">Voltar</button></Link></div>
            </div> 
        </PedidosStyled>
    )
}