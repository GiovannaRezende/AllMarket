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

    const [endereco, setEndereco] = useState([]);
    const [status, setStatus] = useState([]);
    const [idAlterando, setIdAlterando] = useState(0);

    if (admin.bt_administrador === null)
        navigation.push('/home')

    async function listarEndereco() {
        let r = await api.listarEndereco();
        setEndereco(r && r);
        console.log(r);
    }

    async function alterarStatus(id) {
        alert(id);
        let r = await api.alterarStatus(id);
        console.log(r);
        return(r);

        setIdAlterando(status);

    }

    useEffect(() => {
        listarEndereco();
    }, [])

    return(
        <GerenciarEntregasStyled>
            <CabecalhoAdm/>
            <div class="conteudo-entregas">
                <div class="cab-conteudo">Gerenciar Entregas</div>
                {endereco.map((item, i) =>
                    <div class="box-entregas">
                    <div class="pedido">{item.ds_cep}</div>
                    <div class="foto-texto-botao">
                        <div class="foto-textos">
                            <div class="foto"><img src="/assets/images/em-preparo.svg" alt=""/></div>
                            <div class="textos">
                                <div class="texto-destino"><span>Destino:</span> {item.nm_rua}, {item.ds_numero} - {item.nm_cidade}</div>
                                <div class="texto-status"><span>Status:</span> {item.bt_aprovado === 0 ? "Em preparo" : "A caminho"}</div>
                            </div>
                        </div>
                        <div class="botao"><BotaoLaranja onClick={() => alterarStatus(item.id_endereco)}>Atualizar status</BotaoLaranja></div>
                    </div>
                </div>
                )}
            </div>
        </GerenciarEntregasStyled>
    ) 
}
