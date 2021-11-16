import { CarrinhoStyled } from './styled'
import CabecalhoUsu from '../../../components/cabecalhos/usu/cabecalho-usu'
import BoxItem from './carrinhoItem/index'

import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState, useRef } from "react"
import Cookie from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

import Api from '../../../service/api';
const api = new Api();

function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('usuario-logado')
    if (logado === null)
        navigation.push('/login');

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function Carrinho() {
    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation);

    const [cliente, setCliente] = useState(usuarioLogado);
    const [idUsu] = useState(usuarioLogado.id_cliente)
    const [produtos, setProdutos] = useState([]);
    const [pagamento, setPagamento] = useState('');
    const [notaFiscal, setNotaFiscal] = useState('');
    const [endereco, setEndereco] = useState([]);
    const [qtd, setQtd] = useState(produtos.qtd);
    const [valorTotal, setValorTotal] = useState(0);


    useEffect(() => {
        listarCarrinho();
        listarEndereco();
        totalCompra();
    }, [])

    async function finalizarCompra() {

        let r = await api.finalizarCompra(cliente, endereco, notaFiscal, pagamento, produtos, valorTotal, qtd)

        console.log(r)

        if(r.erro) {
            toast.error(`${r.erro}`);
            console.log(r);
        } else {
            toast.dark("Compra Finalizada Com Sucesso")
        }
    }

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

    function totalCompra() {
        let a = 0;
        for (var v of produtos) {
            a = a + Number(v.vl_preco)
        }

        setValorTotal(a)
    }

    const listarEndereco = async () => {
        loading.current.continuousStart();

        let endereco = await api.listarEndereco(idUsu);
        setEndereco(endereco);

        loading.current.complete();
    }

    /* function formaPagamento(forma) {
        setPagamento(forma);
    } */

    return (
        <CarrinhoStyled>
            <ToastContainer />
            <LoadingBar color="#FB8500" ref={loading} />
            <CabecalhoUsu/>
            <div class="conteudo">
                <div class="box-esquerda"> 
                    <div class="topo-box-esq"> Confira a Sua Lista de Produtos: </div>
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
                        <div class="nome-rua"> <span>Logradouro:</span> {endereco.nm_rua}, {endereco.ds_numero} </div>

                        <div class="nome-bairro"> <span>Bairro:</span> Jardim das Flores </div>
                        <div class="cidade-botao"> 
                            <div class="nome-cidade"> <span>Cidade:</span> {endereco.nm_cidade} </div>
                            <button> Alterar </button>
                        </div>
                    </div>
                    <div class="box-pagamento">
                        <div class="titulo-pagamento"> Selecione o Método de Pagamento: </div>
                        <div class="box-botoes">
                            <button /*onClick={formaPagamento('Cartão de Crédito')}*/ > Cartão de Crédito </button>
                            <button /*onClick={formaPagamento('Cartão de Débito')}*/ > Cartão de Débito </button>
                            <button /*onClick={formaPagamento('Boleto')}*/ > Boleto </button>
                            <button /*onClick={formaPagamento('Pix')}*/ > Pix </button>
                        </div>
                    </div>
                    <div class="box-total"> O total da sua compra foi de: <b> R$ {valorTotal} </b> </div>
                    <div class="botao-finalizar"> <button onClick={finalizarCompra}> Finalizar compra </button> </div>

                </div>
            </div>
        </CarrinhoStyled>
    )
}