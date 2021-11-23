import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { PerfilAdmStyled } from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';

import { Link } from 'react-router-dom';

import { useEffect, useState, useRef } from "react"

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import Api from '../../../service/api';
const api = new Api();


function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('usuario-logado')
    if (logado === null)
        navigation.push('/login');

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}


export default function PerfilAdm() {

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation);

     const [admin, setAdmin] = useState(usuarioLogado);
     const [idUsu] = useState(usuarioLogado.id_cliente)
     const [login, setLogin] = useState()
     const [nome, setNome] = useState();
     const [cpf, setCpf] = useState();
     const [email, setEmail] = useState();
     const [telefone, setTelefone] = useState();
     const [idAlterando, setIdAlterando] = useState(0);

    const loading = useRef(null);

    if (admin.bt_administrador === null)
        navigation.push('/home')

    useEffect(() => {
        listarLogado();
    }, [])

    const listarLogado = async () => {
        loading.current.continuousStart();

        let usuLogado = await api.listarUsuLogado(usuarioLogado.ds_login);
        setAdmin(usuLogado)
        setNome(usuLogado.nm_nome);
        setLogin(usuLogado.ds_login);
        setCpf(usuLogado.ds_cpf);
        setEmail(usuLogado.ds_email);

        loading.current.complete();
    }

    async function editarUsu() {
        let id = idUsu;
        let r = await api.editarUsu(id, nome, email, cpf)
        if (r.erro) {
            toast.error(`${r.erro}`)
        } else {
            toast.success('Informações Editadas')
            return r;
        }
    }


    return(
        <PerfilAdmStyled>
            <LoadingBar color="#FB8500" ref={loading} />
            <ToastContainer />
            <CabecalhoAdm/>
            <div className="conteudo">
            <div className="admin-infos">
                <div className="cab-infos">
                    <div className="foto-perfil"><img src="/assets/images/Perfil-Admin.svg" alt=""/></div>
                </div>
                <div className="info">Nome: <input value={nome} onChange={e => setNome(e.target.value)} /> <button className="editar"><img onClick={() => editarUsu()} src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div className="info">CPF: <input value={cpf} onChange={e => setCpf(e.target.value)} /> <button className="editar"><img onClick={() => editarUsu()} src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div className="info">Email: <input value={email} onChange={e => setEmail(e.target.value)} /> <button className="editar"><img onClick={() => editarUsu()} src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
                <div className="info">Telefone: {telefone} <button className="editar"><img onClick={() => editarUsu()} src="/assets/images/Ícone-Editar.png" alt=""/></button></div>
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