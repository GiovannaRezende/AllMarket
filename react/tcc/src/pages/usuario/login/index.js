import { LoginUsuarioStyled }  from './styled';
import { BotaoAzul } from '../../../components/outros/botoes/styled';

export default function LoginUsuario() {
    return(
        <LoginUsuarioStyled>
            <div class="login">
                <div class="titulo-login">FAZER LOGIN</div>
                <div class="inputs">
                    <input type="text" placeholder="Usuário ou email"/>
                    <input type="text" placeholder="Senha"/>
                </div>
                <div class="botao"><BotaoAzul>Entrar</BotaoAzul></div>
            </div>
            <div class="login-com">
                <div class="titulo-login-com">FAZER LOGIN COM</div>
                <div class="logos">
                    <div class="google">
                        <img src="/assets/images/logo-google+.svg" alt=""/>
                        <div>Google+</div>
                    </div>
                    <div class="facebook">
                        <img src="/assets/images/logo-facebook.svg" alt=""/>
                        <div>Facebook</div>
                    </div>
                    <div class="twitter">
                        <img src="/assets/images/logo-twitter.svg" alt=""/>
                        <div>Twitter</div>
                    </div>
                </div>
            </div>
        </LoginUsuarioStyled>  
    ) 
}