import CabecalhoInicial from '../../components/inicial/cabecalho';
import BoxProduto from './boxProduto';
import { Promocionais } from '../../components/inicial/promocionais/styled';
import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <CabecalhoInicial />
            <div class="conteudo">
                <div class="container-banner">
                    <div class="banner"> <img src="./assets/images/Banner-All-Market.png" alt="" /> </div>
                    <div class="container-pontos">
                        <div class="pontos"></div>
                        <div class="pontos"></div>
                        <div class="pontos"></div>
                    </div>
                </div>
                <div class="container-titulo">Categorias</div>
                <div class="categorias">
                    <div class="categorias-icones">
                        <div class="img-categorias"> <a href="./congelados.html"> <img src="./assets/images/Ícone-Congelados.png" alt="" /></a></div>
                        <div class="texts">Congelados</div>
                    </div>
                    <div class="categorias-icones">
                        <div class="img-categorias"> <a href="./laticinios.html"> <img src="./assets/images/Ícone-Laticínios.png" alt="" /></a></div>
                        <div class="texts">Laticínios</div>
                    </div>
                    <div class="categorias-icones">
                        <div class="img-categorias"> <a href="./hortifruti.html"> <img src="./assets/images/Ícone-Hortifruti.png" alt="" /></a></div>
                        <div class="texts">Hortifruti</div>
                    </div>
                    <div class="categorias-icones">
                        <div class="img-categorias"> <a href="./carnes.html"> <img src="./assets/images/Ícone-Carnes.png" alt="" /></a></div>
                        <div class="texts">Carnes</div>
                    </div>
                    <div class="categorias-icones">
                        <div class="img-categorias"> <a href="./limpeza.html"> <img src="./assets/images/Ícone-Limpeza.png" alt="" /></a></div>
                        <div class="texts">Limpeza</div>
                    </div>
                    <div class="categorias-icones">
                        <div class="img-categorias"> <a href="./higiene.html"> <img src="./assets/images/Ícone-Higiene.png" alt="" /></a></div>
                        <div class="texts">Higiene</div>
                    </div>
                </div>
                <div class="titulo2">Mais Vendidos</div>
                <div class="container-2">
                    <div class="colunas">
                        <div class="esquerda"> <img src="./assets/images/Ícone-Seta-3.png" alt="" /> </div>
                        <BoxProduto />
                        <BoxProduto />
                        <BoxProduto />
                        <BoxProduto />
                        <BoxProduto />
                        
                        <div class="direita"> <img src="./assets/images/Ícone-Seta-2.png" alt="" /> </div>
                    </div>
                    <div class="colunas">
                        <div class="esquerda"> <img src="./assets/images/Ícone-Seta-3.png" alt="" /> </div>
                        <BoxProduto />
                        <BoxProduto />
                        <BoxProduto />
                        <BoxProduto />
                        <BoxProduto />
                        <div class="direita"> <img src="./assets/images/Ícone-Seta-2.png" alt="" /> </div>
                    </div>
                </div>
                <Promocionais>
                    <div class="titulo-promocao">Produtos em Promoção</div>
                    <div class="liquidacao">
                        <BoxProduto />
                        <BoxProduto />
                        <BoxProduto />
                        <BoxProduto />
                        <BoxProduto />
                    </div>
                    <div class="liquidacao">
                        <BoxProduto />
                        <BoxProduto />
                        <BoxProduto />
                        <BoxProduto />
                        <BoxProduto />
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
                            <div class="facebook"> <img src="./assets/images/Imagem-Facebook.png" alt="" /> </div>
                            <div class="twitter"> <img src="./assets/images/Imagem-Twitter.png" alt="" /> </div>
                            <div class="instagram"> <img src="./assets/images/Imagem-Instagram.png" alt="" /> </div>
                            <div class="whats"> <img src="./assets/images/Imagem-WhatsApp.png" alt="" /> </div>
                        </div>
                        <div class="contato">contato@allmaket.com.br</div>
                    </div>
                </div>
                <div class="rodape">
                    <div class="linha">ㅤ</div>
                    <div class="texto-final">©CopyRight All Market 2021 | Todos os direitos reservados</div>
                </div>
            </div>
        </Container>
    )
}