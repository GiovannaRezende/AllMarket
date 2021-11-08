import { CabecalhoStyledUsu } from './styled'

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('usuario-logado')
    if (logado === null)
        navigation.push('/login');

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function CabecalhoUsu() {
    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation);

    const [usuario] = useState(usuarioLogado.ds_login);

    return (
        <CabecalhoStyledUsu>
                <div class="logo-allmarket"> <a href="/"> <img src="/assets/images/logo-allmarket.png" alt=""/> </a> </div>
                <div class="cacebalho-direita"> 
                    <div class="nome-usuario"> Olá, <b> {usuario} </b> </div>
                    <div class="imagem-usuario"> <img src="/assets/images/imagem-usu.png" alt=""/> </div>
                </div>
        </CabecalhoStyledUsu>
    )
}