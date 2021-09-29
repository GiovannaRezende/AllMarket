import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { AprovarCompraStyled }  from './styled';

export default function AprovarCompra() {
    return(
        <AprovarCompraStyled>
            <CabecalhoAdm/>
            <div class="conteudo-aprovacao">
                <div class="cab-conteudo">Aprovar Compras</div>
            <div class="corpo-conteudo">
                <div class="box-ckeck-conteudo">
                    <div class="checkbox"><input type="checkbox" style = "width: 2.2em; height: 2.2em"/></div>
                    <div class="box-aprovacao">
                        <div class="foto-nome-usuario">
                            <div class="foto-usuario"><img src="../../react/tcc/public/assets/images/perfil-gabi.svg" alt=""/></div>
                            <div class="nome-usuario">Gabriela Marques</div>
                        </div>
                        <div class="textos">
                            <div class="status"><span>Status:</span> pagamento aprovado</div>
                            <div class="itens"><span>Itens:</span> 8</div>
                            <div class="valor"><span>Valor total:</span> R$113,89</div>
                            <div class="destino"><span>Destino:</span> Rua Padre Augusto, 22</div>
                        </div>
                    </div>
                </div>
                <div class="box-ckeck-conteudo">
                    <div class="checkbox"><input type="checkbox" style = "width: 2.2em; height: 2.2em"/></div>
                    <div class="box-aprovacao">
                        <div class="foto-nome-usuario">
                            <div class="foto-usuario"><img src="../../react/tcc/public/assets/images/perfil-pedro.svg" alt=""/></div>
                            <div class="nome-usuario">Pedro Almeida</div>
                        </div>
                        <div class="textos">
                            <div class="status"><span>Status:</span> pagamento aprovado</div>
                            <div class="itens"><span>Itens:</span> 12</div>
                            <div class="valor"><span>Valor total:</span> R$99,14</div>
                            <div class="destino"><span>Destino:</span> Avenida São Carlos, 987</div>
                        </div>
                    </div>
                </div>
                <div class="botao"><button>Aprovar compras</button></div>
            </div>
            </div>
        </AprovarCompraStyled>  
    ) 
}