import { CabecalhoStyledUsu } from './styled'

export default function CabecalhoUsu() {
    return (
        <CabecalhoStyledUsu>
                <div class="logo-allmarket"> <a href="/"> <img src="/assets/images/logo-allmarket.png" alt=""/> </a> </div>
                <div class="cacebalho-direita"> 
                    <div class="nome-usuario"> Olá, <b> Maria </b> </div>
                    <div class="imagem-usuario"> <img src="/assets/images/imagem-usu.png" alt=""/> </div>
                </div>
        </CabecalhoStyledUsu>
    )
}