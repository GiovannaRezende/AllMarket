import 'react-multi-carousel/lib/styles.css';

import LoadingBar from 'react-top-loading-bar'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CabecalhoInicial from '../../../components/inicial/cabecalho';
import BoxProduto from '../boxProduto';
import { Container } from './styled'
import { useState, useEffect, useRef } from 'react';

import Api from '../../../service/api'
const api = new Api();


export default function PaginaPesquisa(props) {
    const [produtos, setProdutos] = useState([]);
    const [produtoPesquisado, setProdutoPesquisado] = useState([]);
    const [pesquisa, setPesquisa] = useState(props.location.state);
    console.log(setPesquisa);

    useEffect(() => {
        listarProdutos();
    }, [])

    useEffect(() => {
        //mostrarPesquisa();
    }, [])

    const loading = useRef(null);

    async function listarProdutos() {
        loading.current.continuousStart();
    
        let r = await api.listar();
        setProdutos(r);
    
        loading.current.complete();
    }

    async function mostrarPesquisa() {
        let item = await api.listar();
        console.log(item)
        let resultado = item.filter(p => p.nm_produto === pesquisa);
        console.log(pesquisa)
        setProdutoPesquisado(resultado)
    }
    console.log(mostrarPesquisa);

    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="#FB8500" ref={loading} />
            <CabecalhoInicial />
            <div className="conteudo">
                <div className="container-titulo"> Sua pesquisa resultou em: </div>
                            {produtoPesquisado.map(item => 
                                <BoxProduto 
                                 key={item.id_produto}
                                 info={item}/>
                            )}
                <div className="titulo2"> Você também pode gostar de: </div>
                <div className="container-2">
                    <div className="colunas">
                        {produtos.map(item => 
                                <BoxProduto 
                                 key={item.id_produto}
                                 info={item}/>
                            )}

                    </div>
            
                </div>
            </div>
            <div className="final">
                <div className="informacoes">
                    <div className="classes-produtos">
                        <div className="titulo-categoria">Categorias de Produtos</div>
                        <div className="nomes-categorias">
                            <div className="congela">Congelados</div>
                            <div className="laticinios">Laticinios</div>
                            <div className="hort">Hortifruti</div>
                            <div className="carnes">Carnes</div>
                            <div className="limpeza">Limpeza</div>
                            <div className="higiene">Higiene</div>
                        </div>   
                    </div>
                    <div className="atendimento">
                        <div className="titulo-atendimento">Atendimento</div>
                        <div className="horario-normal">Segundas as sextas das 8h ás 22h</div>
                        <div className="horario-feriado">Sábados, domingos e feriados das 9h ás 20h </div>
                    </div>
                    <div className="redes">
                        <div className="titulo-redes">Nos siga nas redes sociais!</div>
                        <div className="redes-sociais">
                            <div className="facebook"> <img src="./assets/images/Imagem-Facebook.png" alt="" /> </div>
                            <div className="twitter"> <img src="./assets/images/Imagem-Twitter.png" alt="" /> </div>
                            <div className="instagram"> <img src="./assets/images/Imagem-Instagram.png" alt="" /> </div>
                            <div className="whats"> <img src="./assets/images/Imagem-WhatsApp.png" alt="" /> </div>
                        </div>
                        <div className="contato">contato@allmaket.com.br</div>
                    </div>
                </div>
                <div className="rodape">
                    <div className="linha">ㅤ</div>
                    <div className="texto-final">©CopyRight All Market 2021 | Todos os direitos reservados</div>
                </div>
            </div>
        </Container>
    )
}