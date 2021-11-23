import CabecalhoStyledUsu from '../../../components/cabecalhos/usu/cabecalho-usu';
import { CadastroCartaoStyled } from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';
import { InputCadastro } from '../../../components/outros/inputs/input';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import { useState, useEffect, useRef } from 'react';

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

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

export default function CadastroCartao() {
    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation);

    const [cartaoInfo, setCartaoInfo] = useState([]);
    const [dono, setDono] = useState('');
    const [cartao, setCartao] = useState('');
    const [tipo, setTipo] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');
    const [idUsu] = useState(usuarioLogado.id_cliente);

    console.log(cartaoInfo)

    useEffect(() => {
        listarCartao();
    }, [])

    const loading = useRef(null);

    async function adicionarCartao() {
        let r = '';
        let idCartao = cartaoInfo.id_cartao

        if(cartaoInfo.id_cartao === undefined) {
            let r = await api.adicionarCartao(dono, cartao, tipo, validade, cvv, idUsu);

            if(r.erro) {
                toast.error(`${r.erro}`);
            } else {
                toast.success('Cartão Cadastrado!');           
            }
        } else {
            r = await api.editarCartao(dono, cartao, tipo, validade, cvv, idCartao)

            if(r.erro) {
                toast.error(`${r.erro}`);
            } else {
                toast.success('Cartão Editado!');           
            }
        }
    
        return(r);
    }

    const listarCartao = async () => {
        loading.current.continuousStart();

        let cartaoUsu = await api.listarCartao(idUsu);
        console.log(cartaoUsu)
        setCartaoInfo(cartaoUsu);
        setDono(cartaoUsu.nm_dono)
        setCartao(cartaoUsu.nr_cartao)
        setTipo(cartaoUsu.tp_tipo)
        setValidade(cartaoUsu.dt_validade)
        setCvv(cartaoUsu.ds_cvv)

        loading.current.complete();
    }

    return (
        <CadastroCartaoStyled>
            <LoadingBar color="#FB8500" ref={loading} />
            <ToastContainer />
            <CabecalhoStyledUsu/>
            <div class="container">
                <div class="container-texto">{(cartaoInfo.id_cartao != null)
                                                                ? 'Editar Cartão'
                                                                : 'Adicionar Cartão' } </div>
                <div class="container-input">
                    <div class="container-conteudo-1">
                        <div class="input-1">
                            <div class="input-texto">Nome do Cartão</div>
                            <InputCadastro value={dono} onChange={e => setDono(e.target.value)}></InputCadastro>
                        </div>
                        <div class="input-2">
                            <div class="input-texto">Número do Cartão</div>
                            <InputCadastro type="password" value={cartao} onChange={e => setCartao(e.target.value)}></InputCadastro>
                        </div>
                        <div class="input-3">
                            <div class="input-texto">Tipo de Cartão</div>
                            <select value={tipo} onChange={e => setTipo(e.target.value)} >
                                <option>Débito</option>
                                <option>Crédito</option>
                            </select>

                        </div>
                        <div class="input-4">
                            <div class="input-texto">Data de Validade</div>
                            <InputCadastro type="date" value={validade} onChange={e => setValidade(e.target.value)} ></InputCadastro>
                        </div>
                    </div>
                    <div class="container-conteudo-2">
                        <div class="input-5">
                            <div class="input-texto">CVV</div>
                            <InputCadastro type="password" value={cvv} onChange={e => setCvv(e.target.value)}></InputCadastro>
                        </div>
                    </div>
                </div>
                <div class="botao-cadastro"><BotaoLaranja onClick={adicionarCartao}> {(cartaoInfo.id_cartao != null)
                                                                                                        ? 'Editar Cartão'
                                                                                                        : 'Adicionar Cartão' } </BotaoLaranja></div>
            </div>
        </CadastroCartaoStyled>  
    ) 
}
