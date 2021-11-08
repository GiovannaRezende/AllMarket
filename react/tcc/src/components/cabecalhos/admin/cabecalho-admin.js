import { CabecalhoAdmStyled } from './styled'

/* a */

export default function CabecalhoAdm(){
    return (
        <CabecalhoAdmStyled> 
            <div class="vazio"></div>
            <div class="itens-cab">
                <div class="nome-adm">Olá, <span>Administrador!</span></div>
                <div class="foto-adm"><img src="/assets/images/Perfil-Admin.svg" alt=""/></div>
            </div>
        </CabecalhoAdmStyled>
    )
}