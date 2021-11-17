import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { AprovarCompraStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';
import { useState, useEffect } from 'react';

import Api from '../../../service/api';
const api = new Api();

export default function AprovarCompra() {

    const [aprovacao, setAprovacao] = useState([]);

    async function listarAprovacao() {
        let r = await api.listarAprovacao();
        setAprovacao(r);
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
                    <div className="checkbox"><input type="checkbox" style={{"width": "2.2em", "height": "2.2em"}}/></div>
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
                </div>
                )}
                <div className="botao"><BotaoLaranja>Aprovar Compras</BotaoLaranja></div>
            </div>
            </div>
        </AprovarCompraStyled>  
    ) 
}