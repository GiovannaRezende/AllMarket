import { CadastroUsuarioStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';

import { useState, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'

import Api from '../../../service/api'
const api = new Api();

export default function CadastroUsuario() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');

    const navigation = useHistory();
    const loading = useRef(null);

    const criarConta = async () => {
      loading.current.continuousStart();
        let r = await api.inserirUsuario(login, senha, cpf, email);

        if(r.erro) {
           toast.error(`${r.erro}`)
           loading.current.complete();
        } else {
            toast.success('Parabéns')
            navigation.push('/login')
            loading.current.complete();
        }
    }


    return(
        <CadastroUsuarioStyled>
            <ToastContainer />
            <LoadingBar color="#FB8500" ref={loading} />
            <div class="cabecalho">
                <div class="titulo">CRIAR CONTA</div>
                <div class="logos">
                    <img src="/assets/images/logo-google+.svg" alt=""/>
                    <img src="/assets/images/logo-facebook.svg" alt=""/>
                    <img src="/assets/images/logo-twitter.svg" alt=""/>
            </div>
            </div>
            <div class="corpo">
                <input 
                      type="text" 
                      placeholder="Usuário"
                      value= {login}
                      onChange= {e => setLogin(e.target.value)}/>
                <input 
                      type="text" 
                      placeholder="CPF"
                      value= {cpf}
                      onChange= {e => setCpf(e.target.value)}/>
                <input 
                      type="text" 
                      placeholder="E-mail"
                      value= {email}
                      onChange= {e => setEmail(e.target.value)}/>
                <input 
                      type="text" 
                      placeholder="Senha"
                      value= {senha}
                      onChange= {e => setSenha(e.target.value)}/>
            </div>
            <div class="corpo2">
                <BotaoLaranja onClick={criarConta}>Cadastrar-se</BotaoLaranja>
            </div>
            <div class="rodape">
                <div class="conta">Já tem conta? Entrar</div>
            </div>
        </CadastroUsuarioStyled>  
    ) 
}