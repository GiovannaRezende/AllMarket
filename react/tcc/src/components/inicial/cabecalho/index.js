import { CabInicial }  from './styled';
import Cookie from 'js-cookie'
import { Link } from 'react-router-dom'

//import { useLoginContext } from "../../../pages/usuario/login/context/loginContext.js";

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

import Api from '../../../service/api'
const api = new Api();

function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('usuario-logado')
    console.log(logado)
    if (logado === null)
        navigation.push('/login');

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function CabecalhoInicial() {
    //const { loginUsu } = useLoginContext();

    const [pesquisa, setPesquisa] = useState('');
    const [numeroProdutos, setNumeroProdutos] = useState([]);

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation);

    const [login, setLogin] = useState(usuarioLogado.ds_login);

    function contador() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined
                    ? JSON.parse(carrinho)
                    : [];

        let total = carrinho.length;
        setNumeroProdutos(total);
    }

    useEffect(() => {
        contador();
    }, [])

    useEffect(() => {
        contador();
    }, [numeroProdutos])

    return(
            <CabInicial>
                <div class="cabecalho-esq">
                    <div class="logo"> <img src="./assets/images/Logo-AllMarket.jpg" alt="" /> </div>
                    <div class="pesquisa"> <input value={pesquisa} onChange={e => setPesquisa(e.target.value)} placeholder="O que você está procurando?"/> </div>
                    <div className="buscar"> 
                        <Link to={{
                            pathname: '/pesquisa',
                            state: pesquisa
                        }}>
                            <button>Buscar</button> 
                        </Link>
                    </div>
                </div>
                <div class="cabecalho-dir"> 
                    <div class="carrinho"> <Link to="/carrinho"> <img src="./assets/images/Carrinho-de-Compras.png" alt="" /></Link></div>
                    <div class="contador"> {numeroProdutos} </div>
                    <div class="texto">Olá, <b> {login} </b> </div>
                    <div class="foto"> <Link to="/perfil-usuario"> <img src="./assets/images/Perfil-Usuario.png" alt=""/></Link></div>
                </div>
            </CabInicial>
    )
}