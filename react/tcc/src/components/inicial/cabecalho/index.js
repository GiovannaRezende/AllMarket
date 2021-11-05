import { CabInicial }  from './styled';
import Cookie from 'js-cookie'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CabecalhoInicial() {

    const [pesquisa, setPesquisa] = useState('');


    function contador() {

        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined
                    ? JSON.parse(carrinho)
                    : [];

        let total = carrinho.length;
        return total;
    }

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
                    <div class="carrinho"> <a href="/carrinho"> <img src="./assets/images/Carrinho-de-Compras.png" alt="" /></a></div>
                    <div class="contador"> {contador()} </div>
                    <div class="texto">Olá, <b>Maria!</b> </div>
                    <div class="foto"> <a href="/perfil-usuario"> <img src="./assets/images/Perfil-Usuario.png" alt=""/></a></div>
                </div>
            </CabInicial>
    )
}