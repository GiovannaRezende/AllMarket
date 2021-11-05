import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { AprovarCompraStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';

export default function AprovarCompra() {
    return(
        <AprovarCompraStyled>
            <CabecalhoAdm/>
            <div className="conteudo-aprovacao">
                <div className="cab-conteudo">Aprovar Compras</div>
            <div class="corpo-conteudo">
                <div className="box-ckeck-conteudo">
                    <div className="checkbox"><input type="checkbox" style={{"width": "2.2em", "height": "2.2em"}}/></div>
                    <div className="box-aprovacao">
                        <div className="foto-nome-usuario">
                            <div className="foto-usuario"><img src="/assets/images/perfil-gabi.svg" alt=""/></div>
                            <div className="nome-usuario">Gabriela Marques</div>
                        </div>
                        <div className="textos">
                            <div className="status"><span>Status:</span> pagamento aprovado</div>
                            <div className="itens"><span>Itens:</span> 8</div>
                            <div className="valor"><span>Valor total:</span> R$113,89</div>
                            <div className="destino"><span>Destino:</span> Rua Padre Augusto, 22</div>
                        </div>
                    </div>
                </div>
                <div className="box-ckeck-conteudo">
                    <div className="checkbox"><input type="checkbox" style={{"width": "2.2em", "height": "2.2em"}}/></div>
                    <div className="box-aprovacao">
                        <div className="foto-nome-usuario">
                            <div className="foto-usuario"><img src="/assets/images/perfil-pedro.svg" alt=""/></div>
                            <div className="nome-usuario">Pedro Almeida</div>
                        </div>
                        <div className="textos">
                            <div className="status"><span>Status:</span> pagamento aprovado</div>
                            <div className="itens"><span>Itens:</span> 12</div>
                            <div className="valor"><span>Valor total:</span> R$99,14</div>
                            <div className="destino"><span>Destino:</span> Avenida São Carlos, 987</div>
                        </div>
                    </div>
                </div>
                <div className="botao"><BotaoLaranja>Aprovar Compras</BotaoLaranja></div>
            </div>
            </div>
        </AprovarCompraStyled>  
    ) 
}