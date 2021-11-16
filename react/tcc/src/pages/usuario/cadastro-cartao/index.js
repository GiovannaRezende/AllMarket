import CabecalhoStyledUsu from '../../../components/cabecalhos/usu/cabecalho-usu';
import { CadastroCartaoStyled } from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';
import { InputCadastro } from '../../../components/outros/inputs/input';


import { useState } from 'react';

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

    const [dono, setDono] = useState('');
    const [cartao, setCartao] = useState('');
    const [tipo, setTipo] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');
    const [idCliente] = useState(usuarioLogado.id_cliente);

    async function adicionarCartao()  {
        let r = await api.adicionarCartao(dono, cartao, tipo, validade, cvv, idCliente);
        return(r);
    }

    function limpar() {
        setDono('');
        setCartao('');
        setTipo('');
        setValidade('');
        setCvv('');
    }


    return(
        <CadastroCartaoStyled>
            <CabecalhoStyledUsu/>
            <div class="container">
                <div class="container-texto">Cadastrar Novo Cartão</div>
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
                <div class="botao-cadastro"><BotaoLaranja onClick={adicionarCartao}>Cadastrar Cartão</BotaoLaranja></div>
            </div>
        </CadastroCartaoStyled>  
    ) 
}
