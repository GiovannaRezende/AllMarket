import { BotaoLaranja } from '../../../../components/outros/botoes/styled';

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BoxAprovarCompraStyled } from './styled'

import Api from '../../../../service/api';
const api = new Api();

export default function BoxCompraAprovar(props) {
    const [compras, setCompras] = useState(props.info)
    const [endereco, setEndereco] = useState([])
    const [cliente, setCliente] = useState([])

    async function aprovarCompra(idCompra) {
        console.log(idCompra)
        let r = await api.aprovarCompra(idCompra);
        
        if (r.erro) {
            toast.error(`${r.erro}`)
        } else {
            toast.success("Compra Aprovada")
            return r;
        }
    }

    async function listarEndereco() {
        let idCompra = compras.id_compra;
        let r = await api.enderecoPedido(idCompra);
        
        setEndereco(r);
    }

    async function listarCliente() {
        let idCompra = compras.id_compra;
        let r = await api.clientePedido(idCompra);
        
        setCliente(r);
    }

    useEffect(() => {
        listarEndereco();
        listarCliente();
    }, [])

    return (
        <BoxAprovarCompraStyled>
                    <div className="box-aprovacao">
                        <div className="foto-nome-usuario">
                            <div className="foto-usuario"><img src="/assets/images/perfil-gabi.svg" alt=""/></div>
                            <div className="nome-usuario">{(cliente.nm_nome === null)
                                                                                ? cliente.ds_login 
                                                                                : cliente.nm_nome} </div>
                        </div>
                        <div className="textos">
                            <div className="código-ompra"><span> Código: {compras.id_compra} </span> </div>
                            <div className="status"><span>Status: Pagamento Aprovado</span> </div>
                            <div className="itens"><span>Itens:</span> <Link to={{ pathname: '/pedido-entrega', state: compras.id_compra}}> Ver Detalhes  </Link> </div>
                            <div className="valor"><span>Valor total:</span> {compras.vl_total}</div>
                            <div className="destino"><span>Destino:</span> Rua: {endereco.nm_rua}, Número: {endereco.ds_numero} </div>
                        </div>
                        <div className="botao"> <BotaoLaranja onClick={() => aprovarCompra(compras.id_compra)} > Aprovar Compra </BotaoLaranja> </div>
            </div>
        </BoxAprovarCompraStyled>
    )
}