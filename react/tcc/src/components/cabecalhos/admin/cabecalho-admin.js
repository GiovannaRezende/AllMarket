import { CabecalhoAdm } from './styled'

export default function Index(){
    return (
        <CabecalhoAdm> 
            <div class="vazio"></div>
            <div class="itens-cab">
                <div class="nome-adm">Olá, <span>Administrador!</span></div>
                <div class="foto-adm"><img src="../../react/tcc/public/assets/images/Perfil-Admin.svg" alt=""/></div>
            </div>
        </CabecalhoAdm>
    )
}