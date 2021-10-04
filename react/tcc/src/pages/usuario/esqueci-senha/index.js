import { EsqueciSenhaStyled } from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';

export default function EsqueciSenha() {
    return (
        <EsqueciSenhaStyled>
            <div class="container-senha">
                <div class="titulo">RECUPERAÇÃO DE SENHA</div>
                <div class="aviso">Iremos te enviar um código por e-mail para que você possa redefinir sua senha.</div>
                <div class="confirmar-email">
                    <input type="text" placeholder="Confirmar e-mail"/>
            </div>
            <div class="botao">
                <BotaoLaranja>Enviar código por e-mail</BotaoLaranja>
            </div>
        </div>

        <div class="container-codigo">
            <div class="titulo">RECUPERAÇÃO DE SENHA</div>
            <div class="aviso">Insira o código enviado por email</div>
            <div class="numeros">
                <input type="number"/>
                <input type="number"/>
                <input type="number"/>
                <input type="number"/>
                <input type="number"/>
                <input type="number"/>
            </div>
            <div class="botao">
                <BotaoLaranja>Confirmar código</BotaoLaranja>
            </div>
        </div>
        </EsqueciSenhaStyled>
    )
}