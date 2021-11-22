import { PerfilUsuarioStyled } from './styled';
import BoxCompra from './boxCompra/index'

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

import { CarouselConfigCompra } from './config';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

import { useLoginContext } from "../../../pages/usuario/login/context/loginContext.js";

import Api from '../../../service/api';
const api = new Api();

function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('usuario-logado')
    console.log(logado)
    if (logado === null)
        navigation.push('/login');

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function PerfilUsuario() {

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation);

    //const { loginUsu } = useLoginContext();

    const [usu, setUsu] = useState([]);
    const [idUsu] = useState(usuarioLogado.id_cliente)
    const [nome, setNome] = useState(usuarioLogado.nm_nome);
    const [login, setLogin] = useState(usuarioLogado.ds_login);
    const [cpf, setCpf] = useState(usuarioLogado.ds_cpf);
    const [email, setEmail] = useState(usuarioLogado.ds_email);
    const [idAlterando, setIdAlterando] = useState(0)
    const [endereco, setEndereco] = useState([]);
    const [cartao, setCartao] = useState([]);
    const [compra, setCompra] = useState([]);

    const loading = useRef(null);

    useEffect(() => {
        listarEndereco();
        listarCartao();
    }, [])

    useEffect(() => {
        listarCompra();
    }, [])

    const listarLogado = async () => {
        loading.current.continuousStart();

        let usuLogado = await api.listarUsuLogado(login);
        setUsu(usuLogado);

        loading.current.complete();
    }

    const listarEndereco = async () => {
        loading.current.continuousStart();

        let endereco = await api.listarEndereco(idUsu);
        setEndereco(endereco);

        loading.current.complete();
    }

    const listarCartao = async () => {
        loading.current.continuousStart();

        let cartao = await api.listarCartao(idUsu);
        setCartao(cartao);

        loading.current.complete();
    }

    const listarCompra = async () => {
        loading.current.continuousStart();

        let compra = await api.listarPedido();
        setCompra(compra);

        loading.current.complete();
    }

    const logoff = () => {
        Cookies.remove('usuario-logado')
        Cookies.remove('carrinho')
        navigation.push('/')
    }

    const comprasUsu = compra.filter(p => p.id_cliente === idUsu);

    async function editarUsu(id) {
        let r = await api.editarUsu(id, nome, login, cpf, email)
    }

    async function editarNome(item) {
        setNome(item.nm_nome);
        setIdAlterando(item.id_cliente)
    } 

    return (
        <PerfilUsuarioStyled>
            <LoadingBar color="#FB8500" ref={loading} />
            <div class="cabecalho">
                <div class="cabecalho-esquerdo">
                    <div class="logo-empresa"> <Link to="/home"> <img src="/assets/images/Logo-AllMarket.jpg" alt="" /> </Link> </div>
                    <div class="titulo-cabecalho">Meu perfil</div>
                </div>
                <div class="icone-sair"> <img onClick={logoff} src="/assets/images/icone-sair.svg" alt="" /> </div>
            </div>
            <div class="container">
                <div class="detalhes-usuario">
                    <div class="background"></div>
                    <div class="imagem-usu"> <img src="/assets/images/Perfil-Usuario.png" alt=""/> </div>
                    <div class="box-informacoes">
                        <div class="informacoes"> <div> <b> Nome: </b> <input value={nome} /> </div> <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt="" /> </div>
                        <div class="informacoes"> <div> <b> Usuário: </b> <input value={login} /> </div> <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt="" /> </div>
                        <div class="informacoes"> <div> <b> CPF: </b> <input value={cpf} /> </div> <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt="" /> </div>
                        <div class="informacoes"> <div> <b> Gênero: </b> <input /> </div> <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt="" /> </div>
                        <div class="informacoes"> <div> <b> Data de nascimento: </b> <input /> </div> <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt="" /> </div>
                        <div class="informacoes"> <div> <b> Telefone: </b> <input /> </div> <img class="icone-editar" src="./assets/images/Ícone-Editar.png" alt="" /> </div>
                        <div class="informacoes"> <div> <b> Email: </b> <input value={email} /> </div> <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt="" /> </div>
                    </div>

                <div className="editar-informacao" onClick={editarUsu(usu.id_usuario)}>  </div>
                    
                </div>
                <div class="box-direita"> 
                    <div class="box-enderecos">
                            <div class="titulo-enderecos">Meus endereços</div>
                            <div class="informacoes-endereco">
                                <div class="box-esq">
                                    <div class="informacoes-box"> Rua: {endereco.nm_rua}, Número: {endereco.ds_numero} </div>
                                    <div class="informacoes-box"> Estado: {endereco.ds_estado} </div>
                                    <div class="informacoes-box"> Cidade: {endereco.nm_cidade} </div>
                                </div>
                            </div>
                            <div class="editar">
                                <Link to='/cadastro-endereco'> <img class="icone-editar" src="/assets/images/Ícone-Editar.png" alt="" /> </Link>
                            </div>
                    </div>
                    <div class="box-contas">
                        <div class="informacoes-conta">
                            <div class="box-esq">
                                <div class="titulo-contas">Contas bancárias/Cartões</div>
                                <div class="informacoes-box"> {cartao.nr_cartao} Banco Itaucard</div>
                                <div class="informacoes-box"> Número: {cartao.nr_cartao} </div>
                                <div class="informacoes-box">Val: {cartao.dt_validade} </div>
                                <div class="informacoes-box">CVV: {cartao.ds_cvv} </div>
                            </div>
                        </div>
                        <div class="editar">
                            <Link to='/cadastro-cartao'> <img class="icone-editar" src="/assets/images/Ícone-Editar.png"  alt="" /> </Link>
                        </div>
                    </div>
                    <div className="carousel-compra"> 
                        <Carousel 
                            responsive={CarouselConfigCompra}
                            containerClass="carousel-container"
                            > 
                            {comprasUsu.map(item => 
                                <BoxCompra
                                    key={item.id_compra}
                                    info={item}/>
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
        </PerfilUsuarioStyled>
    );
};