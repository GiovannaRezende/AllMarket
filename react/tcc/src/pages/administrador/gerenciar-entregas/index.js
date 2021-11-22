import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { GerenciarEntregasStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';
import BoxPedidoGerenciamento from './box-pedido/'

import { useState, useEffect } from 'react';

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom'

import Api from '../../../service/api';
const api = new Api();

function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('usuario-logado')
    if (logado === null)
        navigation.push('/login');

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function GerenciarEntregas() {

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation);

    const [admin, setAdmin] = useState(usuarioLogado);

    const [compras, setCompras] = useState([]);
    const [endereco, setEndereco] = useState([]);
    const [idAlterando, setIdAlterando] = useState(0);

    if (admin.bt_administrador === null)
        navigation.push('/home')

    async function listarCompras() {
        let r = await api.listarPedido();
        let aprovacao = r.filter(p => !(p.ds_status === "Entregue") && p.bt_aprovada === true)
        setCompras(aprovacao);
    }

    async function listarEndereco(idCompra) {
        console.log(idCompra)
        let r = await api.enderecoPedido(idCompra);
        let a = r.nm_cidade
        console.log(a)
        return a;
    }

    async function listarRua(idCompra) {
        let r = await api.enderecoPedido(idCompra);
        let a = r.nm_cidade
        console.log(a)
        return a;
    }


    useEffect(() => {
        listarCompras();
        listarEndereco();
    }, [])


    return(
        <GerenciarEntregasStyled>
            <CabecalhoAdm/>
            <div class="conteudo-entregas">
                <div class="cab-conteudo">Gerenciar Entregas</div>
                {compras.map((item, i) =>
                    <BoxPedidoGerenciamento 
                        key={item.id_compra}
                        info={item}        
                    />
                )}
            </div>
        </GerenciarEntregasStyled>
    ) 
}
