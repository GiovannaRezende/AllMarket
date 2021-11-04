import { ChatStyled } from './styled'

export default function Chat() {
    return (
        <ChatStyled>
            <div class="cab-chat">
                <div class="foto-perfil"> <img src="../../react/tcc/public/assets/images/Perfil-Admin.svg" alt=""/> </div>
                <div class="nome">Mercado</div>
            </div>
            <div class="conteudo-chat">
                <div class="mensagem-hora">
                    <div class="mensagem">Seu pedido saiu para entrega!</div>
                    <div class="hora">16:04</div>
                </div>
                <div class="enviar">
                    <div class="caixa-texto" > <input type="text" placeholder="Digite aqui a sua mensagem"/> </div>
                    <div class="botao-enviar"> <button> <img src="../../react/tcc/public/assets/images/Ícone-Seta.svg" alt=""/> </button> </div>
                </div>
            </div>
        </ChatStyled>
    )
}