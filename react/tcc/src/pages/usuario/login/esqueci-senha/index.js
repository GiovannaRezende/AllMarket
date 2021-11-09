import { EsqueciSenhaStyled } from './styled';
import { BotaoLaranja } from '../../../../components/outros/botoes/styled'
import {Conteiner} from'../comun'
import { useState } from 'react'
import Modal from '../modal';


export default function EsqueciSenha() {

    const [exibirModal, setExibirModal] = useState({show: false});

    return (
        <Conteiner>
            <EsqueciSenhaStyled>
                <div class="container-senha">
                    <div class="titulo1">RECUPERAÇÃO DE SENHA</div>
                    <div class="aviso">Iremos te enviar um código por e-mail para que você possa redefinir sua senha.</div>
                    <div class="confirmar-email">
                        <input type="text" placeholder="Confirmar e-mail"/>
                </div>
                <div class="botao">
                <BotaoLaranja onClick={() => setExibirModal({show: true})}> Enviar código por e-mail </BotaoLaranja> 
                </div>
            </div>

            <Modal options={exibirModal}>                    
                    <div class="container-codigo">
                        <div class="titulo2">RECUPERAÇÃO DE SENHA</div>
                        <div class="aviso">Insira o código enviado por email</div>
                        <div class="numeros">
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                        </div>
                        <div class="botao">
                            <BotaoLaranja>Confirmar código</BotaoLaranja>
                        </div>
                    </div>
                </Modal>
            </EsqueciSenhaStyled>
        </Conteiner>
   )
}

/*
export default function EsqueciSenha() {

const [exibirModal, setExibirModal] = useState({show: false});
     
    return (
        <Conteiner>
            
            <EsqueciSenhaStyled> 
                
                <div class="container-email">
                    <div class="titulo">RECUPERAÇÃO DE SENHA</div>
                    <div class="aviso">Iremos te enviar um código por e-mail para que você possa redefinir sua senha.</div>
                    <div class="confirmar-email">
                        <input type="text" placeholder="Confirmar e-mail"/>
                    </div>
                    <div class="botao">
                        <BotaoLaranja onClick={() => setExibirModal({show: true})}> Enviar código por e-mail </BotaoLaranja> 
                    </div>
                </div>                

                <Modal options={exibirModal}>                    
                    <div class="container-codigo">
                        <div class="titulo">RECUPERAÇÃO DE SENHA</div>
                        <div class="aviso">Insira o código enviado por email</div>
                        <div class="numeros">
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                        </div>
                        <div class="botao">
                            <BotaoLaranja>Confirmar código</BotaoLaranja>
                        </div>
                    </div>
                </Modal>
            
            </EsqueciSenhaStyled>
        
        </Conteiner>
    )
}

*/
