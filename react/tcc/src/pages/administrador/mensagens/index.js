import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { MensagensStyled } from './styled';

export default function Mensagens() {
    return(
        <MensagensStyled>
            <CabecalhoAdm/>
                <div class="conteudo">
                <div class="titulo-mensagem">Mensagens</div>
                <div class="box-mensagem">
                    <div class="foto-texto">
                    <div class="foto-usuario"><img src="/assets/images/perfil-laura.svg" alt=""/></div>
                    <div class="textos">
                        <div class="nome-usuario">Laura Medeiros</div>
                        <div class="mensagem-usuario">Olá! Não estou conseguindo efetuar o pagamento...</div>
                    </div>
                    </div>
                    <div class="contador">
                        <div class="circulo">1</div>
                    </div>
                </div>
                <div class="box-mensagem">
                    <div class="foto-texto">
                    <div class="foto-usuario"><img src="/assets/images/perfil-leo.svg" alt=""/></div>
                    <div class="textos">
                        <div class="nome-usuario">Leonardo Cunha</div>
                        <div class="mensagem-usuario">Olá! Não estou conseguindo efetuar o pagamento...</div>
                    </div>
                    </div>
                    <div class="contador">
                        <div class="circulo">1</div>
                    </div>
                </div>
                <div class="box-mensagem">
                    <div class="foto-texto">
                    <div class="foto-usuario"><img src="/assets/images/perfil-caio.svg" alt=""/></div>
                    <div class="textos">
                        <div class="nome-usuario">Caio Ferreira</div>
                        <div class="mensagem-usuario">Olá! Não estou conseguindo efetuar o pagamento...</div>
                    </div>
                    </div>
                    <div class="contador">
                        <div class="circulo">1</div>
                    </div>
                </div>
                <div class="box-mensagem">
                    <div class="foto-texto">
                    <div class="foto-usuario"><img src="/assets/images/perfil-ana.svg" alt=""/></div>
                    <div class="textos">
                        <div class="nome-usuario">Ana Marinho</div>
                        <div class="mensagem-usuario">Olá! Não estou conseguindo efetuar o pagamento...</div>
                    </div>
                    </div>
                    <div class="contador">
                        <div class="circulo">1</div>
                    </div>
                </div>
                <div class="box-mensagem">
                    <div class="foto-texto">
                    <div class="foto-usuario"><img src="/assets/images/perfil-gabi.svg" alt=""/></div>
                    <div class="textos">
                        <div class="nome-usuario">Gabriela Marques</div>
                        <div class="mensagem-usuario">Olá! Não estou conseguindo efetuar o pagamento...</div>
                    </div>
                    </div>
                    <div class="contador">
                        <div class="circulo">1</div>
                    </div>
                </div>
            </div>
        </MensagensStyled>  
    ) 
}