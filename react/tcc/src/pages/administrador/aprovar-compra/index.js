import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { AprovarCompraStyled }  from './styled';
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

export default function AprovarCompra() {

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation);

    const [admin, setAdmin] = useState(usuarioLogado);

    const [aprovacao, setAprovacao] = useState([]);
    const [compras, setCompras] = useState([]);
    const [aprovado, setAprovado] = useState([]);

    if (admin.bt_administrador === null)
        navigation.push('/home')

    async function listarAprovacao() {
        let r = await api.listarAprovacao();
        setCompras(r);
    }

    async function aprovar(id) {
        let r = await api.aprovarCompra(id);
    }

    useEffect(() => {
        listarAprovacao();
    }, [])

    return(
        <AprovarCompraStyled>
            <CabecalhoAdm/>
            <div className="conteudo-aprovacao">
                <div className="cab-conteudo">Aprovar Compras</div>
            <div class="corpo-conteudo">
            {aprovacao.map((item, i) =>
                <div className="box-ckeck-conteudo">
                    <div className="box-aprovacao">
                        <div className="foto-nome-usuario">
                            <div className="foto-usuario"><img src="/assets/images/perfil-gabi.svg" alt=""/></div>
                            <div className="nome-usuario">{item.id_cliente}</div>
                        </div>
                        <div className="textos">
                            <div className="status"><span>Status:</span> {item.ds_nota_fiscal}</div>
                            <div className="itens"><span>Itens:</span> {item.qtd_quantidade}</div>
                            <div className="valor"><span>Valor total:</span> {item.vl_total}</div>
                            <div className="destino"><span>Destino:</span> {item.id_endereco}</div>
                        </div>
                    </div>
                    <div className="botao"><BotaoLaranja /*onClick={aprovar(item.id_compra)}*/>Aprovar Compras</BotaoLaranja></div>
                </div>
                )}
            </div>
            </div>
        </AprovarCompraStyled>  
    ) 
}