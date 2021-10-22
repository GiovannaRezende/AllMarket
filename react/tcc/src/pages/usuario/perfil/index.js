import { PerfilUsuarioStyled } from './styled'


export default function PerfilUsuario() {
    return (
        <PerfilUsuarioStyled>
            <div class="cabecalho">
                <div class="cabecalho-esquerdo">
                    <div class="logo-empresa"> <a href="/"> <img src="/assets/images/Logo-AllMarket.jpg" alt="" /> </a> </div>
                    <div class="titulo-cabecalho">Meu perfil</div>
                </div>
                <div class="icone-sair"><img src="/assets/images/icone-sair.svg" alt=""/></div>
            </div>
            <div class="container">
                <div class="detalhes-usuario">
                    <div class="background"></div>
                    <div class="imagem-usu"><img src="/assets/images/Perfil-Usuario.png" alt=""/></div>
                
                    <div class="box-informacoes">
                        <div class="informacoes"> <div> <b>Nome:</b> Maria Lima </div> <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt=""/> </div>
                        <div class="informacoes"> <div> <b>Usuário:</b> maria.lima </div> <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt=""/> </div>
                        <div class="informacoes"> <div> <b>CPF:</b> 000.000.000-10 </div> <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt=""/> </div>
                        <div class="informacoes"> <div> <b>Gênero:</b> Feminino </div> <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt=""/> </div>
                        <div class="informacoes"> <div> <b>Data de nasc.:</b> 07/07/1998 </div> <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt=""/> </div>
                        <div class="informacoes"> <div> <b>Telefone:</b> (11) 99999-0000 </div> <img class="icone-editar" src="./assets/images/Ícone-Editar.png" alt=""/> </div>
                        <div class="informacoes"> <div> <b>E-mail:</b> maria@gmail.com </div> <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt=""/> </div>
                    </div>
                </div>
                <div class="box-direita"> 
                    <div class="box-enderecos">
                            <div class="titulo-enderecos">Meus endereços</div>
                            <div class="informacoes-endereco">
                                <div class="box-esq">
                                    <div class="informacoes-box"> Rua Maria da Cruz Cunha, 39</div>
                                    <div class="informacoes-box"> Jardim das Flores</div>
                                    <div class="informacoes-box"> São Paulo/SP</div>
                                </div>
                                <div class="proximo">
                                    <img class="icone-seta" src="/assets/images/Ícone-Seta-2.png" alt=""/>
                                </div>
                            </div>
                            <div class="editar">
                                <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt=""/>
                            </div>
                    </div>
                    <div class="box-contas">
                        <div class="informacoes-conta">
                            <div class="box-esq">
                                <div class="titulo-contas">Contas bancárias/Cartões</div>
                                <div class="informacoes-box">Banco Itaucard</div>
                                <div class="informacoes-box">**** **** **** 9993</div>
                                <div class="informacoes-box"> Val: 03/2023</div>
                                <div class="informacoes-box"> CVV: 963</div>
                            </div>
                            <div class="proximo">
                                <img class="icone-seta" src="/assets/images/Ícone-Seta-2.png" alt=""/>
                            </div>
                        </div>
                        <div class="editar">
                            <img class="icone-editar" src="/assets/images/Ícone-Editar.png"  alt=""/>
                        </div>
                    </div>
                    <div class="box-pedidos">
                        <div class="titulo-pedido">Meus pedidos</div>
                        <div class="informacoes-pedido">
                            <div class="box-esq">
                                <div class="informacoes-box"> Código da Compra: 96472</div>
                                <div class="informacoes-box"> Valor total: R$180,67</div>
                                <div class="informacoes-box"> Status: A caminho</div>
                            </div>
                            <img class="seta-pedido" src="/assets/images/Ícone-Seta-2.png" alt=""/>
                        </div>
                        <div class="cancelar-detalhes">
                            <div class="cancelar-pedido">Cancelar o pedido</div>
                            <button>Ver detalhes</button>
                        </div>
                    </div>
                </div>
            </div>
        </PerfilUsuarioStyled>
    )
}