import { CarrinhoStyled } from './styled'
import CabecalhoUsu from '../../../components/cabecalhos/usu/cabecalho-usu'
import BoxItem from './carrinhoItem/index'

export default function Carrinho() {
    return (
        <CarrinhoStyled>
            <CabecalhoUsu/>
            <div class="conteudo">
                <div class="box-esquerda"> 
                    <div class="topo-box-esq"> Confira a sua lista de produtos </div>
                    <div class="lista-produtos">
                        <BoxItem />
                        <BoxItem />
                        <BoxItem />            
                    </div>
                </div>
                <div class="box-direita">
                    <div class="box-endereco">
                        <div class="titulo-endereco"> Confira o endereco para entrega </div>
                        <div class="nome-rua"> Rua Maria da Cruz Cunha, 39 </div>
                        <div class="nome-bairro"> Jardim das Flores </div>
                        <div class="cidade-botao"> 
                            <div class="nome-cidade"> São Paulo/SP </div>
                            <button> Alterar </button>
                        </div>
                    </div>
                    <div class="box-pagamento">
                        <div class="titulo-pagamento"> Selecione o método de pagamento: </div>
                        <div class="box-botoes">
                            <button> Cartão de Crédito </button>
                            <button> Cartão de Débito </button>
                            <button> Boleto </button>
                            <button> Pix </button>
                        </div>
                    </div>
                    <div class="box-total"> O total da sua compra foi de: <b> R$56,13 </b> </div>
                    <div class="botao-finalizar"> <button> Finalizar compra </button> </div>
                </div>
            </div>
        </CarrinhoStyled>
    )
}