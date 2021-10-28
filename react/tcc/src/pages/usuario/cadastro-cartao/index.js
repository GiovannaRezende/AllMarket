import CabecalhoStyledUsu from '../../../components/cabecalhos/admin/cabecalho-admin';
import { CadastroCartaoStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';
import { InputCadastro } from '../../../components/outros/inputs/input';
import { useState } from 'react';
import Api from '../../../service/api';
const api = new Api();

export default function CadastroCartao() {
    const [dono, setDono] = useState('');
    const [cartao, setCartao] = useState('');
    const [tipo, setTipo] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');

    async function adiciona_cartao()  {
        let r = await api.adicionar_cartao(dono, cartao, tipo, validade, cvv);
        alert('Cartao cadastrado !!');
        limpar();
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
                            <InputCadastro value={cartao} onChange={e => setCartao(e.target.value)}></InputCadastro>
                        </div>
                        <div class="input-3">
                            <div class="input-texto">Tipo de Cartão</div>
                            <InputCadastro value={tipo} onChange={e => setTipo(e.target.value)} ></InputCadastro>
                        </div>
                        <div class="input-4">
                            <div class="input-texto">Data de Validade</div>
                            <InputCadastro value={validade} onChange={e => setValidade(e.target.value)} ></InputCadastro>
                        </div>
                    </div>
                    <div class="container-conteudo-2">
                        <div class="input-5">
                            <div class="input-texto">CVV</div>
                            <InputCadastro value={cvv} onChange={e => setCvv(e.target.value)}></InputCadastro>
                        </div>
                    </div>
                </div>
                <div class="botao-cadastro"><BotaoLaranja onClick={adiciona_cartao} >Cadastrar Cartão</BotaoLaranja></div>
            </div>
        </CadastroCartaoStyled>  
    ) 
}
