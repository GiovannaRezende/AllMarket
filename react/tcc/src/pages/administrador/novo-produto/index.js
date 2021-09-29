import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import NovoProdutoStyled from './';
import BotaoLaranja from '../../../components/outros/botao/botao';

export default function NovoProduto() {
    return(
        <NovoProdutoStyled>
            <CabecalhoAdm/>
            <div class="corpo">
                <div class="corpo-cab">Novo produto</div>
                <div class="inputs">
                <div class="corpo-pt1">
                    <div class="form1">
                        <div class="item">Produto:</div>
                        <input type="text"/>
                    </div>
                    <div class="form2">
                        <div class="item">Categoria:</div>
                        <input type="text"/>
                    </div>
                    <div class="form3">
                        <div class="item">Código do produto:</div>
                        <input type="text"/>
                    </div>
                    <div class="form4">
                        <div class="item">Preço:</div>
                        <input type="text"/>
                    </div>
                </div>
                <div class="corpo-pt2">
                    <div class="form5">
                        <div class="item">Embalagem:</div>
                        <input type="text"/>
                    </div>
                    <div class="form6">
                        <div class="item">Marca/Fabricante:</div>
                        <input type="text"/>
                    </div>
                    <div class="form7">
                        <div class="item">Peso:</div>
                        <input type="text"/>
                    </div>
                </div>
                <div class="corpo-pt3">
                    <div class="form8">
                        <div class="item">Imagem:</div>
                        <input type="text"/>
                    </div>
                    <div class="form9">
                        <div class="item">Descrição:</div>
                        <textarea style={{"resize": "none;"}}> </textarea>
                    </div>
                    <BotaoLaranja></BotaoLaranja>
                </div>
            </div>
           </div>
        </NovoProdutoStyled>
    ) 
}