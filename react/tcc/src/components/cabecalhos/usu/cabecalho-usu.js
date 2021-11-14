import { CabecalhoStyledUsu } from './styled';

import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import { Link } from 'react-router-dom';

function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('usuario-logado')
    console.log(logado)
    if (logado === null)
        navigation.push('/login');

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function CabecalhoUsu() {

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation);

    const [login, setLogin] = useState(usuarioLogado.ds_login);


    return (
        <CabecalhoStyledUsu>
                <div class="logo-allmarket"> <Link to="/home"> <img src="/assets/images/logo-allmarket.png" alt=""/> </Link> </div>
                <div class="cacebalho-direita"> 
                    <div class="nome-usuario"> Olá, <b> {login} </b> </div>
                    <div class="imagem-usuario"> <Link to="/perfil-usuario"><img src="/assets/images/imagem-usu.png" alt=""/> </Link> </div>
                </div>
        </CabecalhoStyledUsu>
    )
}