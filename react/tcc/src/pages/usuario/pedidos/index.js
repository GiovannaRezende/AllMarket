import { PedidosStyled } from './styled'
import CabecalhoUsu from '../../../components/cabecalhos/usu/cabecalho-usu';
import { BotaoAzul } from '../../../components/outros/botoes/styled';

export default function Pedido() {
    return (
        <PedidosStyled>
            <CabecalhoUsu/>
            <div class="conteudo">
                <div class="numero-pedido"> 
                    <div class="pedido"> Pedido 0845 </div> 
                    <div class="barra"></div>
                    <div class="status-pedido"> Pedido Entregue </div> 
                </div>
                <div class="texto-lista"> Lista de Produtos </div> 
                <div class="box-lista">
                    <div class="box-produto">
                        <div class="imagem-produto"> <img src="/assets/images/imagem-produto.png" alt=""/> </div> 
                        <div class="informacoes-produto"> 
                            <div class="nome-produto"> Desodorante - Rexona </div>
                            <div class="preco"> <b>Preço: </b> R$ 8,20 </div>
                            <div class="qtd-produto"> <b>Quantidade Selecionada: </b> 2 </div>
                        </div>
                    </div>
                    <div class="box-produto">
                        <div class="imagem-produto"> <img src="/assets/images/imagem-produto.png" alt=""/> </div> 
                        <div class="informacoes-produto"> 
                            <div class="nome-produto"> Desodorante - Rexona </div>
                            <div class="preco"> <b>Preço: </b> R$ 8,20 </div>
                            <div class="qtd-produto"> <b>Quantidade Selecionada: </b> 2 </div>
                        </div>
                    </div> 
                    <div class="box-produto">
                        <div class="imagem-produto"> <img src="/assets/images/imagem-produto.png" alt=""/> </div> 
                        <div class="informacoes-produto"> 
                            <div class="nome-produto"> Desodorante - Rexona </div>
                            <div class="preco"> <b>Preço: </b> R$ 8,20 </div>
                            <div class="qtd-produto"> <b>Quantidade Selecionada: </b> 2 </div>
                        </div>
                    </div>
                    <div class="box-produto">
                        <div class="imagem-produto"> <img src="/assets/images/imagem-produto.png" alt=""/> </div> 
                        <div class="informacoes-produto"> 
                            <div class="nome-produto"> Desodorante - Rexona </div>
                            <div class="preco"> <b>Preço: </b> R$ 8,20 </div>
                            <div class="qtd-produto"> <b>Quantidade Selecionada: </b> 2 </div>
                        </div>
                    </div>
                    <div class="box-produto">
                        <div class="imagem-produto"> <img src="/assets/images/imagem-produto.png" alt=""/> </div> 
                        <div class="informacoes-produto"> 
                            <div class="nome-produto"> Desodorante - Rexona </div>
                            <div class="preco"> <b>Preço: </b> R$ 8,20 </div>
                            <div class="qtd-produto"> <b>Quantidade Selecionada: </b> 2 </div>
                        </div>
                    </div>
                    <div class="box-produto">
                        <div class="imagem-produto"> <img src="/assets/images/imagem-produto.png" alt=""/> </div> 
                        <div class="informacoes-produto"> 
                            <div class="nome-produto"> Desodorante - Rexona </div>
                            <div class="preco"> <b>Preço: </b> R$ 8,20 </div>
                            <div class="qtd-produto"> <b>Quantidade Selecionada: </b> 2 </div>
                        </div>
                    </div>
                </div>
                <div class="botao-voltar"> <button>Voltar</button> </div>
            </div> 
        </PedidosStyled>
    )
}