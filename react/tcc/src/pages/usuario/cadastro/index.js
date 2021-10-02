import { CadastroUsuarioStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';

export default function CadastroUsuario() {
    return(
        <CadastroUsuarioStyled>
            <div class="cabecalho">
                <div class="titulo">CRIAR CONTA</div>
                <div class="logos">
                    <img src="/assets/images/logo-google+.svg" alt=""/>
                    <img src="/assets/images/logo-facebook.svg" alt=""/>
                    <img src="/assets/images/logo-twitter.svg" alt=""/>
            </div>
            </div>
            <div class="corpo">
                <input type="text" placeholder="Usuário"/>
                <input type="text" placeholder="CPF"/>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Senha"/>
            </div>
            <div class="corpo2">
                <BotaoLaranja>Cadastrar-se</BotaoLaranja>
            </div>
            <div class="rodape">
                <div class="conta">Já tem conta? Entrar</div>
            </div>
        </CadastroUsuarioStyled>  
    ) 
}