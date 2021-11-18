import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { PerfilAdmStyled } from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';

import { Link } from 'react-router-dom';

import { useEffect, useState, useRef } from "react"

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('usuario-logado')
    if (logado === null)
        navigation.push('/login');

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

//import { useState } from 'react';

//import { toast, ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

//import Api from '../../../service/api';
//const api = new Api();



export default function PerfilAdm() {

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation);

     const [admin, setAdmin] = useState(usuarioLogado);
     const [nome, setNome] = useState(usuarioLogado.nm_nome);
     const [cpf, setCpf] = useState(usuarioLogado.ds_cpf);
     const [email, setEmail] = useState(usuarioLogado.ds_email);
     const [telefone, setTelefone] = useState(usuarioLogado.ds_telefone);
     const [idAlterando, setIdAlterando] = useState(0);


    if (admin.bt_administrador === null)
        navigation.push('/home')

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
                <div className="info">Nome: {nome} <button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div className="info">CPF: {cpf} <button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div className="info">Email: {email} <button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div className="info">Telefone: (11)99990-7272<button className="editar"><img src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
            </div>
            <div className="admin-funcoes">
                <div className="botao"><BotaoLaranja><Link to="/controle-produto">Administrar produtos</Link></BotaoLaranja></div>
                <div className="botao"><BotaoLaranja><Link to="/aprovar-compra">Aprovar compras</Link></BotaoLaranja></div>
                <div className="botao"><BotaoLaranja><Link to="/gerenciar-entregas">Gerenciar entregas</Link></BotaoLaranja></div>
                <div className="botao"><BotaoLaranja><Link to="/home">Modo usuário</Link></BotaoLaranja></div>
            </div>
        </div>
        </PerfilAdmStyled>
    ) 
}