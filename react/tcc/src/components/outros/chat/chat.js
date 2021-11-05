import { ChatStyled } from './styled'
import Api from '../../../service/api';
import { useState } from 'react';
const api = new Api();

export default function Chat() {
    const [cliente, setCliente] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [admin, setAdmin] = useState('');


    async function mensagem_chat() {
        let r = await api.chat(cliente, admin, mensagem);
        alert('mensagem enviada !!');
        console.log(r);
    }

    console.log(setCliente, setAdmin);

    return (
        <ChatStyled>
            <div class="cab-chat">
                <div class="foto-perfil"> <img src="../../react/tcc/public/assets/images/Perfil-Admin.svg" alt=""/> </div>
                <div class="nome">Mercado</div>
            </div>
            <div class="conteudo-chat">
                {/* {mensagem.map( x => 
                    <div class="mensagem-hora">
                        <div class="mensagem">Seu pedido saiu para entrega!</div>
                        <div class="hora">16:04</div>
                    </div>
                )} */}

                <div class="enviar">
                    <div class="caixa-texto" > <input type="text" placeholder="Digite aqui a sua mensagem" value={mensagem} onChange={e => setMensagem(e.target.value)} /> </div>
                    <div class="botao-enviar"> <button onClick={mensagem_chat}> <img src="../../react/tcc/public/assets/images/Ícone-Seta.svg" alt=""/> </button> </div>
                </div>
            </div>
        </ChatStyled>
    )
}