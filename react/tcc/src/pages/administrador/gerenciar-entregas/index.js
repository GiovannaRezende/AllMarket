import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { GerenciarEntregasStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';

import { useState, useEffect } from 'react';

import Api from '../../../service/api';
const api = new Api();

export default function GerenciarEntregas() {

    const [endereco, setEndereco] = useState([]);
    const [status, setStatus] = useState([]);
    const [idAlterando, setIdAlterando] = useState(0);

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
