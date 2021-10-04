import { LoginUsuarioStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';

export default function LoginUsuario() {
    return(
        <LoginUsuarioStyled>
            <div class="cabecalho">
          <div class="titulo">FAZER LOGIN</div>
          <div class="logos">
            <img src="/assets/images/logo-google+.svg" alt=""/>
            <img src="/assets/images/logo-facebook.svg" alt=""/>
            <img src="/assets/images/logo-twitter.svg" alt=""/>
          </div>
        </div>
        <div class="corpo">
          <input type="text" placeholder="Usuário"/>
          <input type="text" placeholder="Senha"/>
        </div>
        <div class="rodape">
            <div class="senha">Esqueci a senha</div>
          </div>
        <div class="corpo2">
          <BotaoLaranja>Entrar</BotaoLaranja>
        </div>
        </LoginUsuarioStyled>  
    ) 
}