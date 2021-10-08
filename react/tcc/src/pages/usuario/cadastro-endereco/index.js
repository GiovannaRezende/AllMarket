import CabecalhoStyledUsu from '../../../components/cabecalhos/admin/cabecalho-admin';
import { CadastroEnderecoStyled }  from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';
import { InputCadastro } from '../../../components/outros/inputs/input';

export default function CadastroEndereco() {
    return(
        <CadastroEnderecoStyled>
            <CabecalhoStyledUsu/>
            <div class="container">
                <div class="container-texto">Cadastrar Novo Endereço</div>
                <div class="container-input">
                    <div class="container-conteudo-1">
                        <div class="input-1">
                            <div class="input-texto">CEP</div>
                            <InputCadastro></InputCadastro>
                        </div>
                        <div class="input-2">
                            <div class="input-texto">Estado</div>
                            <InputCadastro></InputCadastro>
                        </div>
                        <div class="input-3">
                            <div class="input-texto">Cidade</div>
                            <InputCadastro></InputCadastro>
                        </div>
                        <div class="input-4">
                            <div class="input-texto">Logradouro</div>
                            <InputCadastro></InputCadastro>
                        </div>
                    </div>
                    <div class="container-conteudo-2">
                        <div class="input-5">
                            <div class="input-texto">Número</div>
                            <InputCadastro></InputCadastro>
                        </div>
                        <div class="input-6">
                            <div class="input-texto">Complemento</div>
                            <InputCadastro></InputCadastro>
                        </div>
                        <div class="input-7">
                            <div class="input-texto">Ponto de Referência</div>
                            <InputCadastro></InputCadastro>
                        </div>
                    </div>    
                </div>
                <div class="botao-cadastro"><BotaoLaranja>Cadastrar Endereço</BotaoLaranja></div>
            </div>
        </CadastroEnderecoStyled>  
    ) 
}