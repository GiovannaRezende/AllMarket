import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { PerfilAdmStyled } from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';

//import { useState } from 'react';

//import { toast, ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

//import Api from '../../../service/api';
//const api = new Api();

export default function PerfilAdm() {

    // const [admin, setAdmin] = useState([]);
    // const [nome, setNome] = useState('');
    // const [cpf, setCpf] = useState('');
    // const [email, setEmail] = useState('');
    // const [telefone, setTelefone] = useState('');
    // const [idAlterando, setIdAlterando] = useState(0);

    // async function alterarAdmin() {
    //     let r = await api.alterarAdmin(idAlterando, nome, cpf, email, telefone);
    //     if(r.erro) 
    //         toast.error(`${r.erro}`); 
    //     else {
    //         // toast.success('Admin alterado!');

    //     }
        
    // }

    return(
        <PerfilAdmStyled>
            {/* <ToastContainer/> */}
            <CabecalhoAdm/>
            <div className="conteudo">
            <div className="admin-infos">
                <div className="cab-infos">
                    <div className="foto-perfil"><img src="/assets/images/Perfil-Admin.svg" alt=""/></div>
                </div>
                {/* {admin.map((item, i) =>
                
                )} */}
                <div className="info">Nome: João da Silva<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div className="info">CPF: 111.222.333-00<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div className="info">Email: joaosilva@gmail.com<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div className="info">Telefone: (11)99990-7272<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
            </div>
            <div className="admin-funcoes">
                <div className="botao"><BotaoLaranja><a href="/controle-produto">Administrar produtos</a></BotaoLaranja></div>
                <div className="botao"><BotaoLaranja><a href="/aprovar-compra">Aprovar compras</a></BotaoLaranja></div>
                <div className="botao"><BotaoLaranja><a href="/mensagens">Responder mensagens</a></BotaoLaranja></div>
                <div className="botao"><BotaoLaranja><a href="/gerenciar-entregas">Gerenciar entregas</a></BotaoLaranja></div>
                <div className="botao"><BotaoLaranja><a href="/home">Modo usuário</a></BotaoLaranja></div>
            </div>
        </div>
        </PerfilAdmStyled>
    ) 
}