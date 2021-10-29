import { CarrinhoStyled } from './styled'
import CabecalhoUsu from '../../../components/cabecalhos/usu/cabecalho-usu'
import BoxItem from './carrinhoItem/index'

import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState, useRef } from "react"
import Cookie from 'js-cookie'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../service/api';
const api = new Api();

export default function Carrinho() {
    const [produtos, setProdutos] = useState([]);
    const [pagamento, setPagamento] = useState([]);

    useEffect(() => {
        listarCarrinho();
    }, [])

    const loading = useRef(null);

    function listarCarrinho() {
        loading.current.continuousStart();

        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined
                    ? JSON.parse(carrinho)
                    : [];

        setProdutos(carrinho);

        loading.current.complete();
    }

    function alterar(id, qtd) {
        let alterado = produtos.filter(item => item.id === id);
        alterado.qtd = qtd;
        Cookie.set('carrinho', JSON.stringify(produtos));
    }

    function remover(id) {
        let carrinho = produtos.filter(item => item.id_produto !== id);
        Cookie.set('carrinho', JSON.stringify(carrinho));
        setProdutos([...carrinho]);
        
    }

    function valorTotal() {
        let a = 0;
        for (var v of produtos) {
            a = a + Number(v.vl_preco)
        }

        return a;
    }

    //function finalizarCompra() {
        //const resp = await.api.finalizarCompra(produtos, pagamento)
    //}

    return (
        <CarrinhoStyled>
            <ToastContainer />
            <LoadingBar color="#FB8500" ref={loading} />
            <CabecalhoUsu/>
            <div class="conteudo">
                <div class="box-esquerda"> 
                    <div class="topo-box-esq"> Confira a sua lista de produtos </div>
                    <div class="lista-produtos">
                        {produtos.map(item => 
                            <BoxItem key={item.id_produto}
                                info={item}
                                onUpdate={alterar}
                                onRemove={remover} />
                        )}           
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
                    <div class="box-total"> O total da sua compra foi de: <b> R${valorTotal()} </b> </div>
                    <div class="botao-finalizar"> <button> Finalizar compra </button> </div>
                </div>
            </div>
        </CarrinhoStyled>
    )
}