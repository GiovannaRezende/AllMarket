import { LoginUsuarioStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';
import {Conteiner} from'./comun'


  
  
export default function LoginUsuario() {
  return(
    <Conteiner>
      <LoginUsuarioStyled >     
          <div class="cabecalho">
            <div class="titulo">FAZER LOGIN</div>
            <div class="logos">
              <img src="/assets/images/logo-google+.svg" alt=""/>
              <img src="/assets/images/logo-facebook.svg" alt=""/>
              <img src="/assets/images/logo-twitter.svg" alt=""/>
            </div>  
            <div class="corpo">
              <input type="text" placeholder="Usuário"/>
              <input type="text" placeholder="Senha"/>
            </div>
            <div class="rodape">
             <div class="esqueci-senha"> <a href="../esqueci-senha">Esqueci a senha</a> </div>
            </div>
            <div class="corpo2">
              <BotaoLaranja><a>Entrar</a></BotaoLaranja>
            </div>
          </div>            
      </LoginUsuarioStyled>
    </Conteiner>    
  ) 
}

