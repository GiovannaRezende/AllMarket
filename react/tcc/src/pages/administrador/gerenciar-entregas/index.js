import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { GerenciarEntregasStyled }  from './styled';

export default function GerenciarEntregas() {
    return(
        <GerenciarEntregasStyled>
            <CabecalhoAdm/>
            <div class="conteudo-entregas">
                <div class="cab-conteudo">Gerenciar Entregas</div>
                <div class="box-entregas">
                    <div class="pedido">Pedido 9374</div>
                    <div class="foto-texto-botao">
                        <div class="foto-textos">
                            <div class="foto"><img src="../../react/tcc/public/assets/images/em-preparo.svg" alt=""/></div>
                            <div class="textos">
                                <div class="texto-destino"><span>Destino:</span> Rua Padre Augusto, 22</div>
                                <div class="texto-status"><span>Status:</span> Em prepraro</div>
                            </div>
                        </div>
                        <div class="botao"><button>Atualizar status</button></div>
                    </div>
                </div>
                <div class="box-entregas">
                    <div class="pedido">Pedido 8462</div>
                    <div class="foto-texto-botao">
                        <div class="foto-textos">
                            <div class="foto"><img src="../../react/tcc/public/assets/images/entregue.svg" alt=""/></div>
                            <div class="textos">
                                <div class="texto-destino"><span>Destino:</span>Avenida das Oliveiras, 908</div>
                                <div class="texto-status"><span>Status:</span>A caminho</div>
                            </div>
                        </div>
                        <div class="botao"><button>Atualizar status</button></div>
                    </div>
                </div>
                <div class="box-entregas">
                    <div class="pedido">Pedido 2357</div>
                    <div class="foto-texto-botao">
                        <div class="foto-textos">
                            <div class="foto"><img src="../../react/tcc/public/assets/images/a-caminho.svg" alt=""/></div>
                            <div class="textos">
                                <div class="texto-destino"><span>Destino:</span>Rua dos Bobos, 0</div>
                                <div class="texto-status"><span>Status:</span> Entregue</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GerenciarEntregasStyled>  
    ) 
}