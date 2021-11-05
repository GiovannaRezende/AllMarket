import { NovaSenhaStyled }from './styled'
import { BotaoLaranja } from '../../../../components/outros/botoes/styled'
import {Conteiner} from'../comun'

export default function ResetSenha(){
    return(
        <Conteiner>
            <NovaSenhaStyled>
                <div class=" nova-senha">
                    <div class="titulo"> Nova Senha </div>
                        <div class="corpo">
                        
                            <div><input type="text" placeholder="Senha Atual"/></div>

                            <div><input type="text" placeholder="Nova Senha"/></div>
                        
                            <div><input type="text" placeholder="Confirmar Senha"/></div>
                        </div>
                        <BotaoLaranja><a>Confirmar</a></BotaoLaranja>  
                </div>
            </NovaSenhaStyled>
        </Conteiner>
    )
} 
