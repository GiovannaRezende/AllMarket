import { CarouselConfig } from './config';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useHistory } from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar';

import Cookies from 'js-cookie';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';

import CabecalhoInicial from '../../../components/inicial/cabecalho';
import BoxProduto from '../boxProduto';
import { Container } from './styled'
import { useState, useEffect, useRef } from 'react';
// import Chat from '../../components/outros/chat/chat';

//import { useLoginContext } from "../usuario/login/context/loginContext.js";

import Api from '../../../service/api'
const api = new Api();

export default function Index() {
    //const { loginUsu } = useLoginContext();

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        listarProdutos();
    }, [])

    const loading = useRef(null);

    async function listarProdutos() {
        loading.current.continuousStart();
    
        let r = await api.listar();
        setProdutos(r);
    
        loading.current.complete();
    }

    let lista1 = produtos.filter(p => p.id_categoria === 2);
    let lista2 = produtos.filter(p => p.id_categoria === 1);

    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="#FB8500" ref={loading} />
            <CabecalhoInicial />
            <div className="conteudo">
                <div className="container-banner">
                    <div className="banner"> <img src="./assets/images/Banner-Limpeza.png" alt="" />
                    </div>
                </div>
                <div className="titulo2">Limpeza</div>
                <div className="container-2">
                    <div className="colunas">
                        {/* <Chat /> */}
                        <Carousel 
                         responsive={CarouselConfig}
                         containerClass="carousel-container"
                         >
                            {lista1.map(item => 
                                <BoxProduto 
                                 key={item.id_produto}
                                 info={item}/>
                            )}
                        </Carousel>

                    </div>
                    <div className="colunas">
                        <Carousel 
                          responsive={CarouselConfig}
                          containerClass="carousel-container" >
                            {lista2.map(item => 
                                <BoxProduto 
                                 key={item.id_produto}
                                 info={item} />
                            )}
                        </Carousel>
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
                    <div className="redes">
                        <div className="titulo-redes">Nos Siga nas Redes Sociais!</div>
                        <div className="redes-sociais">
                            <div className="facebook"> <img src="./assets/images/Imagem-Facebook.png" alt="" /> </div>
                            <div className="twitter"> <img src="./assets/images/Imagem-Twitter.png" alt="" /> </div>
                            <div className="instagram"> <img src="./assets/images/Imagem-Instagram.png" alt="" /> </div>
                            <div className="whats"> <img src="./assets/images/Imagem-WhatsApp.png" alt="" /> </div>
                        </div>
                        <div className="contato">weballmarket@gmail.com</div>
                    </div>
                </div>
                <div className="rodape">
                    <div className="linha">ㅤ</div>
                    <div className="texto-final">© CopyRight All-Market 2021 | Todos os Direitos Reservados</div>
                </div>
            </div>
        </Container>
    )
}