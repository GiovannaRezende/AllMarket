import { CadastroUsuarioStyled }  from './styled';
import BotaoLaranja from '../../../components/outros/botao/botao';
import BotaoAzul from '../../../components/outros/botao/botao';

export default function CadastroUsuario() {
    return(
        <CadastroUsuarioStyled>
            <div class="entrar">
                <div class="titulo-bem-vindo">BEM-VINDO DE VOLTA!</div>
                <div class="texto-login">Faça login para prosseguir com suas compras...</div>
                <div class="botao-entrar"><button>Entrar</button></div>
            </div>
            <div class="cadastrar">
                <div class="cab-cadastrar">
                    <div class="criar-conta">CRIAR CONTA</div>
                    <div class="logos">
                        <div class="logo"><img src="../../react/tcc/public/assets/images/logo-google+.svg" alt=""/></div>
                        <div class="logo"><img src="../../react/tcc/public/assets/images/logo-facebook.svg" alt=""/></div>
                        <div class="logo"><img src="../../react/tcc/public/assets/images/logo-twitter.svg" alt=""/></div>
                    </div>
                </div>
                <div class="inputs">
                    <input type="text" placeholder="Usuário"/>
                    <input type="text" placeholder="CPF"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Senha"/>
                </div>
                <div class="botao-cadastrar"><button>Cadastrar-se</button></div>
            </div>
        </CadastroUsuarioStyled>  
    ) 
}