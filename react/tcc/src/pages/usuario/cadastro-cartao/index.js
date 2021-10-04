import CabecalhoStyledUsu from '../../../components/cabecalhos/admin/cabecalho-admin';
import { CadastroCartaoStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';

export default function CadastroCartao() {
    return(
        <CadastroCartaoStyled>
            <CabecalhoStyledUsu/>
            <div class="container">
                <div class="container-texto">Cadastrar Novo Cartão</div>
                <div class="container-input">
                    <div class="container-conteudo-1">
                        <div class="input-1">
                            <div class="input-texto">Nome do Cartão</div>
                            <input class="text"/>
                        </div>
                        <div class="input-2">
                            <div class="input-texto">Número do Cartão</div>
                            <input class="text"/>
                        </div>
                        <div class="input-3">
                            <div class="input-texto">Tipo de Cartão</div>
                            <select name="cars" id="cars" form="carform">
                                <option>MasterCard</option>
                                <option>Visa</option>
                              </select>
                        </div>
                        <div class="input-4">
                            <div class="input-texto">Data de Validade</div>
                            <input class="text"/>
                        </div>
                    </div>
                    <div class="container-conteudo-2">
                        <div class="input-5">
                            <div class="input-texto">CVV</div>
                            <input class="text"/>
                        </div>
                    </div>
                </div>
                <div class="botao-cadastro"><BotaoLaranja>Cadastrar Cartão</BotaoLaranja></div>
            </div>
        </CadastroCartaoStyled>  
    ) 
}