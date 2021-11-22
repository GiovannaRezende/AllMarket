import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { GerenciarEntregasStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';

import { useState, useEffect } from 'react';

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'


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
        let aprovacao = r.filter(p => !(p.ds_status === "Entregue"))
        setCompras(aprovacao);
    }

    async function alterarStatus(idCompra) {

        let compra = await api.listarCompraEntrega(idCompra);
        let status = compra.ds_status;

        let r = await api.alterarStatus(idCompra, status);
        console.log(r);
        return(r);
    }

    useEffect(() => {
        listarCompras();
    }, [])

    return(
        <GerenciarEntregasStyled>
            <CabecalhoAdm/>
            <div class="conteudo-entregas">
                <div class="cab-conteudo">Gerenciar Entregas</div>
                {compras.map((item, i) =>
                    <div class="box-entregas" key={item.id_compra}>
                    <div class="pedido"> Pedido: {item.id_compra}</div>
                    <div class="foto-texto-botao">
                        <div class="foto-textos">
                            <div class="foto"><img src="/assets/images/em-preparo.svg" alt=""/></div>
                            <div class="textos">
                                <div class="texto-destino"><span>Destino:</span> Rua: {}, Número: {} - Cidade: {} </div>
                                <div class="texto-status"><span>Status:</span> {item.ds_status}</div>
                            </div>
                        </div>
                        <div class="botao"><BotaoLaranja onClick={() => alterarStatus(item.id_compra)}>Atualizar status</BotaoLaranja></div>
                    </div>
                </div>
                )}
            </div>
        </GerenciarEntregasStyled>
    ) 
}
