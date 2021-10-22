import { CarouselConfig } from './config';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CabecalhoInicial from '../../components/inicial/cabecalho';
import BoxProduto from './boxProduto';
import { Promocionais } from '../../components/inicial/promocionais/styled';
import { Container } from './styled'
import { useState, useEffect } from 'react';

export default function Index() {
    const [produtos, setProdutos] = useState([]);

    function listar() {
        const r = [
            {
                id: 99,
                imagem: "./assets/images/Imagem-Leite-em-Pó-2.png",
                nome: "Pão de Queijo Congelado",
                marca: "Seara",
                categoria: "Congelados",
                peso: "2kg",
                preco: "R$29,35",

            },
            {
                id: 101,
                imagem: "./assets/images/Carrinho-de-Compras.png",
                nome: "Sabão em pó",
                categoria: "Higiene",
                marca: "Omo",
                peso: "1kg",
                preco: "R$18,35",

            },
            {
                id: 102,
                imagem: "./assets/images/Carrinho-de-Compras.png",
                nome: "Detergente ",
                categoria: "Limpeza",
                marca: "Ype",
                peso: "300ml",
                preco: "R$ 5,99",

            },
            {
                id: 103,
                imagem: "./assets/images/Carrinho-de-Compras.png",
                nome: "Queijo Provolone",
                categoria: "Laticínios",
                marca: "Tirolez",
                peso: "750g",
                preco: "R$17,35",

            },
            {
                id: 104,
                imagem: "./assets/images/Carrinho-de-Compras.png",
                nome: "Leite em pó",
                categoria: "Laticínios",
                marca: "Ninho",
                peso: "400g",
                preco: "R$17,35",

            },
            {
                id: 105,
                imagem: "./assets/images/Carrinho-de-Compras.png",
                nome: "Picanha",
                categoria: "Carnes",
                marca: "Swift",
                peso: "1kg",
                preco: "R$ 22,00",

            },
            {
                id: 106,
                imagem: "./assets/images/Carrinho-de-Compras.png",
                nome: "Yorgut",
                categoria: "Laticínios",
                marca: "Danone",
                peso: "400g",
                preco: "R$ 2,99",

            },
            {
                id: 107,
                imagem: "./assets/images/Carrinho-de-Compras.png",
                nome: "Multiuso",
                categoria: "Limpeza",
                marca: "Cif",
                peso: "200ml",
                preco: "R$ 5,39",

            },
            {
                id: 108,
                imagem: "./assets/images/Carrinho-de-Compras.png",
                nome: "Alface Crespa",
                categoria: "Hortifruti",
                marca: "Fazenda do Zé",
                peso: "20g",
                preco: "R$ 2,00",

            },
            {
                id: 109,
                imagem: "./assets/images/Carrinho-de-Compras.png",
                nome: "Uva Verde",
                categoria: "Hortifruti",
                marca: "Fazenda do Zé",
                peso: "200g",
                preco: "R$ 7,00",

            },
            {
                id: 110,
                imagem: "./assets/images/Carrinho-de-Compras.png",
                nome: "Desodorante",
                categoria: "Higiene",
                marca: "Rexona",
                peso: "50ml",
                preco: "R$ 7,45",

            },
            {
                id: 111,
                imagem: "./assets/images/Carrinho-de-Compras.png",
                nome: "Beterraba",
                categoria: "Hortifruti",
                marca: "Fazenda do Zé",
                peso: "500g",
                preco: "R$ 5,15",

            }
        ]
        setProdutos(r);
    }

    const lista1 = produtos.filter(p => p.categoria === 'Congelados' || p.categoria === 'Laticínios' || p.categoria === 'Higiene');
    const lista2 = produtos.filter(p => p.categoria === 'Limpeza' || p.categoria === 'Carnes' || p.categoria === 'Hortifruti');

    useEffect(() => {
        listar();
    }, [])

    return (
        <Container>
            <CabecalhoInicial />
            <div className="conteudo">
                <div className="container-banner">
                    <div className="banner"> <img src="./assets/images/Banner-All-Market.png" alt="" /> </div>
                    <div className="container-pontos">
                        <div className="pontos"></div>
                        <div className="pontos"></div>
                        <div className="pontos"></div>
                    </div>
                </div>
                <div className="container-titulo">Categorias</div>
                <div className="categorias">
                    <div className="categorias-icones">
                        <div className="img-categorias"> <a href="./congelados.html"> <img src="./assets/images/Ícone-Congelados.png" alt="" /></a></div>
                        <div className="texts">Congelados</div>
                    </div>
                    <div className="categorias-icones">
                        <div className="img-categorias"> <a href="./laticinios.html"> <img src="./assets/images/Ícone-Laticínios.png" alt="" /></a></div>
                        <div className="texts">Laticínios</div>
                    </div>
                    <div className="categorias-icones">
                        <div className="img-categorias"> <a href="./hortifruti.html"> <img src="./assets/images/Ícone-Hortifruti.png" alt="" /></a></div>
                        <div className="texts">Hortifruti</div>
                    </div>
                    <div className="categorias-icones">
                        <div className="img-categorias"> <a href="./carnes.html"> <img src="./assets/images/Ícone-Carnes.png" alt="" /></a></div>
                        <div className="texts">Carnes</div>
                    </div>
                    <div className="categorias-icones">
                        <div className="img-categorias"> <a href="./limpeza.html"> <img src="./assets/images/Ícone-Limpeza.png" alt="" /></a></div>
                        <div className="texts">Limpeza</div>
                    </div>
                    <div className="categorias-icones">
                        <div className="img-categorias"> <a href="./higiene.html"> <img src="./assets/images/Ícone-Higiene.png" alt="" /></a></div>
                        <div className="texts">Higiene</div>
                    </div>
                </div>
                <div className="titulo2">Mais Vendidos</div>
                <div className="container-2">
                    <div className="colunas">
                        <Carousel 
                         responsive={CarouselConfig}
                         containerClass="carousel-container"
                         >
                            {lista1.map(item => 
                                <BoxProduto 
                                 key={item.id}
                                 info={item} />
                            )}
                        </Carousel>
                            
                        
                    </div>
                    <div className="colunas">
                        <Carousel 
                          responsive={CarouselConfig}
                          containerClass="carousel-container" >
                            {lista2.map(item => 
                                <BoxProduto 
                                 key={item.id}
                                 info={item} />
                            )}
                        </Carousel>
                    </div>
                </div>
                <Promocionais>
                    <div className="titulo-promocao">Produtos em Promoção</div>
                    <div className="liquidacao">
                    </div>
                    <div className="liquidacao">
                    </div>
                </Promocionais>
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