import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { PerfilAdmStyled } from './styled';

export default function PerfilAdm() {
    return(
        <PerfilAdmStyled>
            <CabecalhoAdm/>
            <div class="conteudo">
            <div class="admin-infos">
                <div class="cab-infos">
                    <div class="foto-perfil"><img src="/assets/images/Perfil-Admin.svg" alt=""/></div>
                </div>
                <div class="info"><span>Nome:</span>João da Silva<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div class="info"><span>CPF:</span>111.222.333-00<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div class="info"><span>Email:</span>joaosilva@gmail.com<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div class="info"><span>Telefone:</span>(11)99990-7272<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div class="info"><span>Cargo:</span>Administrador<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
            </div>
            <div class="admin-funcoes">
                <div class="funcoes"><button> <a href="/controle-produto"> Administrar produtos </a> </button></div>
                <div class="funcoes"><button> <a href="/aprovar-compra"> Aprovar compras </a> </button> </div>
                <div class="funcoes"><button> <a href="/mensagens"> Responder mensagens </a> </button> </div>
                <div class="funcoes"><button> <a href="/"> Modo usuário </a> </button> </div>
            </div>
        </div>
        </PerfilAdmStyled>
    ) 
}