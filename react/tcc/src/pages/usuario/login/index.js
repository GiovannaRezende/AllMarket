import { LoginUsuarioStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';

import { useState, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'

import Cookies from 'js-cookie'

//import { useLoginContext } from "./context/loginContext.js";

import Api from '../../../service/api'
const api = new Api();

export default function LoginUsuario() {
    //const { setLoginUsu } = useLoginContext();
  

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useHistory();
    const loading = useRef(null);

    const loginUsu = async () => {
      loading.current.continuousStart();
      let r = await api.login(login, senha);

      console.log(r);
        
      if(r.erro) {
           toast.error(`${r.erro}`)
           loading.current.complete();
      } else if (r.bt_administrador === 1 || r.bt_administrador === true) {
          Cookies.set('usuario-logado', JSON.stringify(r));
          navigation.push('/perfil-adm')
      } else {
            Cookies.set('usuario-logado', JSON.stringify(r));
            navigation.push('/home')
      } 
    }
 

    return(
            <LoginUsuarioStyled>
              <ToastContainer />
              <LoadingBar color="#FB8500" ref={loading} />
              <div className="container">
              <div class="cabecalho">
                <div class="titulo">FAZER LOGIN</div>
                {/* <div class="logos">
                  <img src="/assets/images/logo-google+.svg" alt=""/>
                  <img src="/assets/images/logo-facebook.svg" alt=""/>
                  <img src="/assets/images/logo-twitter.svg" alt=""/>
                </div> */}
              </div>
              <div class="corpo">
                <input 
                      type="text" 
                      placeholder="Usuário" 
                      value= {login}
                      onChange= {e => setLogin(e.target.value)} />
                <input 
                      type="password" 
                      placeholder="Senha"
                      value= {senha}
                      onChange= {e => setSenha(e.target.value)} />
              </div>
              <div class="rodape">
                {/* <div class="senha">Esqueci a Senha</div> */}
                </div>
              <div class="corpo2">
                <BotaoLaranja onClick={loginUsu}>Entrar</BotaoLaranja>
              </div>
              </div>
            </LoginUsuarioStyled>
    ) 
}