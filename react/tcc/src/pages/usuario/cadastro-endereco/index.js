import CabecalhoStyledUsu from '../../../components/cabecalhos/usu/cabecalho-usu';
import { CadastroEnderecoStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';
import { InputCadastro } from '../../../components/outros/inputs/input';

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

import { useState } from 'react';

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

export default function CadastroEndereco() {
    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation);
    
    const [cep, setCep] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [referencia, setReferencia] = useState('');
    const [idCliente] = useState(usuarioLogado.id_cliente);

    async function adicionarEnd() {
            let r = await api.adicionarEndereco(cep, estado, cidade, rua, numero, complemento, referencia, idCliente);
            console.log(r)
            return(r);
    }

    function limpar() {
        setCep('');
        setEstado('');
        setCidade('');
        setRua('');
        setNumero('');
        setComplemento('');
        setReferencia('');
    }


    return(
        <CadastroEnderecoStyled>
            <CabecalhoStyledUsu/>
            <div class="container">
                <div class="container-texto">Cadastrar Novo Endereço</div>
                <div class="container-input">
                    <div class="container-conteudo-1">
                        <div class="input-1">
                            <div class="input-texto">CEP</div>
                            <InputCadastro value={cep} onChange={e => setCep(e.target.value)} />
                        </div>
                        <div class="input-2">
                            <div class="input-texto">Estado</div>
                            <InputCadastro value={estado} onChange={e => setEstado(e.target.value)} />
                        </div>
                        <div class="input-3">
                            <div class="input-texto">Cidade</div>
                            <InputCadastro value={cidade} onChange={e => setCidade(e.target.value)} />
                        </div>
                        <div class="input-4">
                            <div class="input-texto">Logradouro</div>
                            <InputCadastro value={rua} onChange={e => setRua(e.target.value)} />
                        </div>
                    </div>
                    <div class="container-conteudo-2">
                        <div class="input-5">
                            <div class="input-texto">Número</div>
                            <InputCadastro value={numero} onChange={e => setNumero(e.target.value)} />
                        </div>
                        <div class="input-6">
                            <div class="input-texto">Complemento</div>
                            <InputCadastro value={complemento} onChange={e => setComplemento(e.target.value)} />
                        </div>
                        <div class="input-7">
                            <div class="input-texto">Ponto de Referência</div>
                            <InputCadastro value={referencia} onChange={e => setReferencia(e.target.value)} />
                        </div>
                    </div>    
                </div>
                <div class="botao-cadastro"><BotaoLaranja onClick={adicionarEnd}>Cadastrar Endereço</BotaoLaranja></div>
            </div>
        </CadastroEnderecoStyled>  
    ) 
}
