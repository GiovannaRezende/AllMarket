import { CabInicial }  from './styled';

export default function CabecalhoInicial() {
    return(
            <CabInicial>
                <div class="cabecalho-esq">
                    <div class="logo"> <img src="./assets/images/Logo-AllMarket.jpg" alt="" /> </div>
                    <div class="pesquisa"> <input placeholder="O que você está procurando?"/> </div>
                    <div class="buscar"> <button>Buscar</button> </div>
                </div>
                <div class="cabecalho-dir"> 
                    <div class="carrinho"> <a href="/carrinho"> <img src="./assets/images/Carrinho-de-Compras.png" alt="" /></a></div>
                    <div class="contador">2</div>
                    <div class="texto">Olá, <b>Maria!</b> </div>
                    <div class="foto"> <a href="/perfil-usuario"> <img src="./assets/images/Perfil-Usuario.png" alt=""/></a></div>
                </div>
            </CabInicial>
    )
}