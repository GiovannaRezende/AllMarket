import { useState, useEffect } from 'react';
import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { MensagensStyled } from './styled';

import Api from '../../../service/api';
const api = new Api();

export default function Mensagens() {

    const [mensagens, setMensagens] = useState([]);

    async function listarMensagem() {
        let r = await api.listarMensagem();
        setMensagens(r);
    }

    useEffect(() => {
        listarMensagem();
    }, [])

    return(
        <MensagensStyled>
            <CabecalhoAdm/>
                <div class="conteudo">
                <div class="titulo-mensagem">Mensagens</div>
                {mensagens.map((item, i) =>
                    <div class="box-mensagem"> 
                    <div class="foto-texto">
                    <div class="foto-usuario"><img src="/assets/images/perfil-ana.svg" alt=""/></div>
                    <div class="textos">
                        <div class="nome-usuario">{item.id_cliente}</div>
                        <div class="mensagem-usuario">{item.ds_mensagem}</div>
                    </div>
                    </div>
                    <div class="contador">
                        <div class="circulo">1</div>
                    </div>
                </div>
                )}
            </div>
        </MensagensStyled>  
    ) 
}