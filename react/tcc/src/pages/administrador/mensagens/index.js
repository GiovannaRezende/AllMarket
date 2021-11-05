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
                <div className="conteudo">
                <div className="titulo-mensagem">Mensagens</div>
                {mensagens.map((item, i) =>
                    <div className="box-mensagem"> 
                    <div className="foto-texto">
                    <div className="foto-usuario"><img src="/assets/images/perfil-ana.svg" alt=""/></div>
                    <div className="textos">
                        <div className="nome-usuario">{item.id_cliente}</div>
                        <div className="mensagem-usuario">{item.ds_mensagem}</div>
                    </div>
                    </div>
                    <div className="contador">
                        <div className="circulo">1</div>
                    </div>
                </div>
                )}
            </div>
        </MensagensStyled>  
    ) 
}