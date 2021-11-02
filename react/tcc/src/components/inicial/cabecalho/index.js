import { CabInicial }  from './styled';
import Cookie from 'js-cookie'
import { useEffect } from 'react'

export default function CabecalhoInicial() {

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
                    <div class="pesquisa"> <input placeholder="O que você está procurando?"/> </div>
                    <div class="buscar"> <button>Buscar</button> </div>
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