import { InicialStyled }  from './styled';
import { CabInicial } from '../../components/inicial/cabecalho/styled';
import { BoxProduto } from '../../components/inicial/box-produto/styled';
import { Promocionais } from '../../components/inicial/promocionais/styled';

export default function Inicial() {
    return(
        <InicialStyled>
            <CabInicial/>
            <div class="conteudo">
                <div class="container-banner">
                    <div class="banner"> <img src="../../react/tcc/public/assets/images/Banner-All-Market.png" alt="" /> </div>
                    <div class="container-pontos">
                        <div class="pontos"></div>
                        <div class="pontos"></div>
                        <div class="pontos"></div>
                    </div>
                </div>
                <div class="container-titulo">Categorias</div>
                <div class="categorias">
                    <div class="categorias-icones">
                        <div class="img-categorias"> <a href="./congelados.html"> <img src="../../react/tcc/public/assets/images/Ícone-Congelados.png" alt="" /></a></div>
                        <div class="texts">Congelados</div>
                    </div>
                    <div class="categorias-icones">
                        <div class="img-categorias"> <a href="./laticinios.html"> <img src="../../react/tcc/public/assets/images/Ícone-Laticínios.png" alt="" /></a></div>
                        <div class="texts">Laticínios</div>
                    </div>
                    <div class="categorias-icones">
                        <div class="img-categorias"> <a href="./hortifruti.html"> <img src="../../react/tcc/public/assets/images/Ícone-Hortifruti.png" alt="" /></a></div>
                        <div class="texts">Hortifruti</div>
                    </div>
                    <div class="categorias-icones">
                        <div class="img-categorias"> <a href="./carnes.html"> <img src="../../react/tcc/public/assets/images/Ícone-Carnes.png" alt="" /></a></div>
                        <div class="texts">Carnes</div>
                    </div>
                    <div class="categorias-icones">
                        <div class="img-categorias"> <a href="./limpeza.html"> <img src="../../react/tcc/public/assets/images/Ícone-Limpeza.png" alt="" /></a></div>
                        <div class="texts">Limpeza</div>
                    </div>
                    <div class="categorias-icones">
                        <div class="img-categorias"> <a href="./higiene.html"> <img src="../../react/tcc/public/assets/images/Ícone-Higiene.png" alt="" /></a></div>
                        <div class="texts">Higiene</div>
                    </div>
                </div>
                <div class="titulo2">Mais Vendidos</div>
                <div class="container-2">
                    <div class="colunas">
                        <div class="esquerda"> <img src="../../react/tcc/public/assets/images/Ícone-Seta-3.png" alt="" /> </div>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Creme-de-Leite-2.png" alt="" /> </div>
                            <div class="desc">Creme de Leite</div>
                            <div class="desc2">Italac</div>
                            <div class="peso">200G</div>
                            <div class="preco">R$2,25</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Feijão.png" alt=""/> </div>
                            <div class="desc">Feijão</div>
                            <div class="desc2">Camil</div>
                            <div class="peso">1KG</div>
                            <div class="preco">R$7,40</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Macarrão.png" alt="" /> </div>
                            <div class="desc">Macarrão</div>
                            <div class="desc2">Renata</div>
                            <div class="peso">500G</div>
                            <div class="preco">R$3,05</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Sorvete-3.png" alt="" /> </div>
                            <div class="desc">Sorv. Napolitano</div>
                            <div class="desc2">Kibon</div>
                            <div class="peso">800ML</div>
                            <div class="preco">R$15,00</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Leite-em-Pó-2.png" alt="" /> </div>
                            <div class="desc">Leite em Pó</div>
                            <div class="desc2">Ninho</div>
                            <div class="peso">400G</div>
                            <div class="preco">R$17,35</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Refrigerante.png" alt="" /> </div>
                            <div class="desc">Refgrnt. Guaraná</div>
                            <div class="desc2">Fanta</div>
                            <div class="peso">350ML</div>
                            <div class="preco">R$2,85</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <div class="direita"> <img src="/assets/images/Ícone-Seta-2.png" alt="" /> </div>
                    </div>
                    <div class="colunas">
                        <div class="esquerda"> <img src="/assets/images/Ícone-Seta-3.png" alt="" /> </div>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Café.png" alt="" /> </div>
                            <div class="desc">Café Tradicional</div>
                            <div class="desc2">Pilão</div>
                            <div class="peso">500G</div>
                            <div class="preco">R$12,75</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Leite-Condensado-2.png" alt="" /> </div>
                            <div class="desc">Leite Cdensado.</div>
                            <div class="desc2">Nestlé</div>
                            <div class="peso">400G</div>
                            <div class="preco">R$6,55</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Fraldas-3.png" alt="" /> </div>
                            <div class="desc">Fraldas</div>
                            <div class="desc2">Pampers</div>
                            <div class="peso">1PCT</div>
                            <div class="preco">R$21,90</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Achocolatado.png" alt="" /> </div>
                            <div class="desc">Achocolatado</div>
                            <div class="desc2">Nescau</div>
                            <div class="peso">200G</div>
                            <div class="preco">R$3,75</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Detergente-2.png" alt="" /> </div>
                            <div class="desc">Detergente</div>
                            <div class="desc2">Limpol</div>
                            <div class="peso">500ML</div>
                            <div class="preco">R$1,60</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Enxaguante-3.png" alt="" /> </div>
                            <div class="desc">Exaguante Bucal</div>
                            <div class="desc2">Colgate</div>
                            <div class="peso">180ML</div>
                            <div class="preco">R$6,90</div>
                            <div class="botao" ><img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <div class="direita"> <img src="/assets/images/Ícone-Seta-2.png" alt="" /> </div>
                    </div>
                </div>
                <Promocionais>
                    <div class="titulo-promocao">Produtos em Promoção</div>
                    <div class="liquidacao">
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Arroz.png" alt="" /> </div>
                            <div class="desc">Arroz</div>
                            <div class="desc2">Camil</div>
                            <div class="peso">5KG</div>
                            <div class="preco">R$21,00</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Amaciante-2.png" alt="" /> </div>
                            <div class="desc">Amaciante</div>
                            <div class="desc2">Ypê</div>
                            <div class="peso">2L</div>
                            <div class="preco">R$7,65</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Leite-2.png" alt="" /> </div>
                            <div class="desc">Leite Integral</div>
                            <div class="desc2">Parmalat</div>
                            <div class="peso">1L</div>
                            <div class="preco">R$4,30</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Leite-Condensado-3.jpg" alt="" /> </div>
                            <div class="desc">Leite Cdensado.</div>
                            <div class="desc2">Nestlé</div>
                            <div class="peso">400G</div>
                            <div class="preco">R$4,25</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Creme-de-Leite-3.png" alt="" /> </div>
                            <div class="desc">Creme de Leite</div>
                            <div class="desc2">Itambé</div>
                            <div class="peso">200G</div>
                            <div class="preco">R$2,40</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Limpador-3.png" alt="" /> </div>
                            <div class="desc">Limpador Multso.</div>
                            <div class="desc2">Veja</div>
                            <div class="peso">500ML</div>
                            <div class="preco">R$4,75</div>
                            <div class="botao" ><img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                    </div>
                    <div class="liquidacao">
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Refrigerante-2.png" alt="" /> </div>
                            <div class="desc">Refgrnt. Uva</div>
                            <div class="desc2">Fanta</div>
                            <div class="peso">350ML</div>
                            <div class="preco">R$2,90</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Margarina-2.png" alt="" /> </div>
                            <div class="desc">Margarina</div>
                            <div class="desc2">Delícia</div>
                            <div class="peso">500G</div>
                            <div class="preco">R$6,05</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Pão-de-Queijo-2.png" alt="" /> </div>
                            <div class="desc">Pão de Queijo</div>
                            <div class="desc2">Forno Minas</div>
                            <div class="peso">1KG</div>
                            <div class="preco">R$23,40</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Farinha-Láctea-2.png" alt="" /> </div>
                            <div class="desc">Farinha Láctea</div>
                            <div class="desc2">Nestlé</div>
                            <div class="peso">400G</div>
                            <div class="preco">R$7,55</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Pipoca.png" alt="" /> </div>
                            <div class="desc">Pipoca Caramelo</div>
                            <div class="desc2">Yoki</div>
                            <div class="peso">50G</div>
                            <div class="preco">R$4,00</div>
                            <div class="botao"> <img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                        <BoxProduto>
                            <div class="img1"> <img src="/assets/images/Imagem-Milho-Verde.png" alt="" /> </div>
                            <div class="desc">Milho Verde</div>
                            <div class="desc2">Bonare</div>
                            <div class="peso">2KG</div>
                            <div class="preco">R$16,90</div>
                            <div class="botao" ><img src="/assets/images/Carrinho-de-Compras-2.png" alt="" /> </div>
                        </BoxProduto>
                    </div>
                </Promocionais>
            </div>
            <div class="final">
                <div class="informacoes">
                    <div class="classes-produtos">
                        <div class="titulo-categoria">Categorias de Produtos</div>
                        <div class="nomes-categorias">
                            <div class="congela">Congelados</div>
                            <div class="laticinios">Laticinios</div>
                            <div class="hort">Hortifruti</div>
                            <div class="carnes">Carnes</div>
                            <div class="limpeza">Limpeza</div>
                            <div class="higiene">Higiene</div>
                        </div>   
                    </div>
                    <div class="atendimento">
                        <div class="titulo-atendimento">Atendimento</div>
                        <div class="horario-normal">Segundas as sextas das 8h ás 22h</div>
                        <div class="horario-feriado">Sábados, domingos e feriados das 9h ás 20h </div>
                    </div>
                    <div class="redes">
                        <div class="titulo-redes">Nos siga nas redes sociais!</div>
                        <div class="redes-sociais">
                            <div class="facebook"> <img src="/assets/images/Imagem-Facebook.png" alt="" /> </div>
                            <div class="twitter"> <img src="/assets/images/Imagem-Twitter.png" alt="" /> </div>
                            <div class="instagram"> <img src="/assets/images/Imagem-Instagram.png" alt="" /> </div>
                            <div class="whats"> <img src="/assets/images/Imagem-WhatsApp.png" alt="" /> </div>
                        </div>
                        <div class="contato">contato@allmaket.com.br</div>
                    </div>
                </div>
                <div class="rodape">
                    <div class="linha">ㅤ</div>
                    <div class="texto-final">©CopyRight All Market 2021 | Todos os direitos reservados</div>
                </div>
            </div>
        </InicialStyled>  
    ) 
}