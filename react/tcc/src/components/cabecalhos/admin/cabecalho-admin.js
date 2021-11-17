import { CabecalhoAdmStyled } from './styled';

import { Link } from 'react-router-dom';

/* a */

export default function CabecalhoAdm(){
    return (
        <CabecalhoAdmStyled> 
            <div class="vazio"></div>
            <div class="itens-cab">
                <div class="nome-adm">Olá, <span>Administrador!</span></div>
                <div class="foto-adm"><Link to="/perfil-adm"><img src="/assets/images/Perfil-Admin.svg" alt=""/></Link></div>
            </div>
        </CabecalhoAdmStyled>
    )
}