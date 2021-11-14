import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { PerfilAdmStyled } from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';

import { Link } from 'react-router-dom';

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
            <CabecalhoAdm/>
            <div className="conteudo">
            <div className="admin-infos">
                <div className="cab-infos">
                    <div className="foto-perfil"><img src="/assets/images/Perfil-Admin.svg" alt=""/></div>
                </div>
                <div className="info">Nome: João da Silva<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div className="info">CPF: 111.222.333-00<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div className="info">Email: joaosilva@gmail.com<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div className="info">Telefone: (11)99990-7272<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
            </div>
            <div className="admin-funcoes">
                <div className="botao"><BotaoLaranja><Link to="/controle-produto">Administrar produtos</Link></BotaoLaranja></div>
                <div className="botao"><BotaoLaranja><Link to="/aprovar-compra">Aprovar compras</Link></BotaoLaranja></div>
                <div className="botao"><BotaoLaranja><Link to="/mensagens">Responder mensagens</Link></BotaoLaranja></div>
                <div className="botao"><BotaoLaranja><Link to="/gerenciar-entregas">Gerenciar entregas</Link></BotaoLaranja></div>
                <div className="botao"><BotaoLaranja><Link to="/home">Modo usuário</Link></BotaoLaranja></div>
            </div>
        </div>
        </PerfilAdmStyled>
    ) 
}